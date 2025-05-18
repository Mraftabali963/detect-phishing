import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [phishingLinks, setPhishingLinks] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetch("/phishing-links.txt")
      .then((res) => res.text())
      .then((text) => {
        // Split by line, remove empty lines, trim
        setPhishingLinks(text.split(/\r?\n/).map(l => l.trim()).filter(Boolean));
      });
  }, []);

  const normalizeDomain = (input) => {
    // Remove protocol, www, and trailing slashes
    return input
      .replace(/https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/$/, "")
      .toLowerCase();
  };

  const handleCheckUrl = () => {
    const normalizedUrl = normalizeDomain(url.trim());
    const found = phishingLinks.some(link => {
      const normalizedLink = normalizeDomain(link);
      return (
        normalizedUrl === normalizedLink ||
        normalizedUrl.endsWith("." + normalizedLink) ||
        normalizedUrl.includes(normalizedLink)
      );
    });
    setResult(found ? "Phishing/Scam site detected!" : "Site appears safe.");
    setAnimate(false); // Reset animation
    setTimeout(() => setAnimate(true), 10); // Trigger animation
  };

  return (
    <div className="absolute inset-0 h-full w-full items-center px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="header-container">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-white mt-4">
            Detect Phishing
          </h1>
          <h3 className="text-xl text-white mt-8">
            This tool detects Phishing and Scam Sites
          </h3>
        </header>
      </div>
      <div className="flex flex-col items-center mt-20">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL..."
          className="w-100 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-lg shadow-md bg-white/90 backdrop-blur-md transition-all duration-200"
        />
        <button
          onClick={handleCheckUrl}
          className="mt-4 w-100 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg transition-all duration-200"
        >
          Check URL
        </button>
        {result && (
          <div
            className={`mt-8 w-100 px-6 py-4 rounded-xl shadow-xl text-center text-lg font-semibold transition-all duration-300 ${result.includes('Phishing') ? 'bg-red-500/90 text-white' : 'bg-green-500/90 text-white'}${animate ? ' animate-popout' : ''}`}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
