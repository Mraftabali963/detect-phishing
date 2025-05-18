# 🛡️ DetectPhishing

A modern React app to help you detect phishing and scam websites instantly. Enter any website URL and get an instant verdict.


<!-- ![screenshot](./public/screenshot.png) -->

## 🚀 Features
- **Instant Phishing Detection:** Enter a URL and check if it matches any known phishing or scam sites.
- **Modern UI:** Clean, responsive, and animated interface for a great user experience.
- **Popout Animation:** Results are displayed with a beautiful popout animation for clear feedback.


## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd DetectPhishing

# Install dependencies
$ npm install
# or
yarn install
```

### Running the App
```bash
# Start the development server
$ npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure
```
public/
  phishing-links.txt   # List of known phishing/scam sites (one per line)
src/
  App.jsx             # Main React component
  App.css             # Styles and animations
  ...
```

## 🛡️ Customizing the Phishing List
- Edit `public/phishing-links.txt` to add or remove domains.
- Each line should contain one domain or URL (e.g., `phishingsite.com`, `http://malicious.com`).

## ✨ Credits
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).
- UI inspired by modern security tools.

## 📄 License
MIT
