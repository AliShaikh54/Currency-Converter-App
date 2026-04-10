# Currency Converter
<img width="1366" height="768" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/24bae34b-8045-413f-9d49-67bc4eee3c27" />

A fast, lightweight currency converter web app built with vanilla HTML, CSS, and JavaScript — 
no frameworks, no dependencies, just the web platform doing its thing.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

##  Features

-  **Live Exchange Rates** — Fetches real-time rates so your conversions are always up to date
-  **Offline Fallback** — Falls back to static rates when no internet connection is available
-  **Multi-Currency Support** — Convert between a wide range of world currencies
-  **Zero Dependencies** — Pure HTML, CSS, and JavaScript; no npm install required
-  **Responsive Design** — Works seamlessly on desktop and mobile

---


## 📸 Screenshot

```md
<img width="1366" height="768" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/162a08ae-6a3d-4478-833e-f227e2de4ba1" />
```

---

##  Getting Started

No build tools or package managers needed. Just clone and open.

### 1. Clone the repository

```bash
git clone https://github.com/AliShaikh54/Currency-Converter-App.git
cd Currency-Converter-App
```

### 2. Open in your browser

```bash
# Simply open index.html in your browser
open index.html
```

Or drag and drop `index.html` into any browser window.

---

## 📁 Project Structure

```
Currency-Converter-App/
├── index.html        # App markup
├── style.css         # Styling
├── script.js         # App logic & API calls
├── codes.js          # Contain country codes
└── README.md
```

---

## 🌐 API

This app uses the free, open-source [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api) — no API key required.

```js
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
```

Rates are fetched at runtime for the selected base currency. If the API is unavailable or the user is offline, the app gracefully falls back to a set of built-in static rates.

To switch to a different provider, update `BASE_URL` in `script.js` with your preferred endpoint.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please keep PRs focused and include a clear description of what changed and why.

---

## 🐛 Reporting Issues

Found a bug or have a feature request? [Open an issue](https://github.com/AliShaikh54/Currency-Converter-App/issues) and include:

- A clear description of the problem
- Steps to reproduce it
- Expected vs. actual behavior
- Browser and OS details

---


## 🙌 Acknowledgements

- Exchange rates provided by [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api) — free & open-source, no key needed
- Flag icons (if used) from [Flag Icons](https://flagsapi.com)

---

<p align="center">Made with ❤️ using vanilla HTML, CSS & JavaScript</p>
