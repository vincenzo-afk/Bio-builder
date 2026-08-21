# ✦ Aesthetic Bio Maker

A minimal, Notion-style bio builder. Fill in your profile details, generate an aesthetic bio with Groq AI, style it as a profile card, and export a clean PNG for your link-in-bio, Discord, GitHub, or anywhere else.

Everything runs in the browser. Your data (form values, API key, bio history, saved projects) is stored in `localStorage` and never leaves your device.

![v2.0](https://img.shields.io/badge/version-v2.0-blue)
[![Lint](https://github.com/vincenzo-afk/Bio-builder/actions/workflows/lint.yml/badge.svg)](https://github.com/vincenzo-afk/Bio-builder/actions/workflows/lint.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚡ Features

| Feature | Description |
| :--- | :--- |
| **AI Bio Generation** | Powered by Groq (Llama 3.3 70B) to generate polished, platform-native bios. |
| **Card Studio** | Live preview with 4 aesthetic themes: Notion, Glass, Paper, and Neon. |
| **Custom Links** | Add up to 4 additional link pills (TikTok, YouTube, LinkedIn, Portfolio, etc.). |
| **Export Presets** | One-click export for Instagram (1:1), Stories (9:16), and Banners (3:1). |
| **Shareable Setup** | Encode your entire configuration into a URL hash for zero-backend sharing. |
| **Typography** | 5 hand-picked font styles synced across output and preview. |
| **Symbol Palette** | Quick-access aesthetic symbols (✦, ⋆, ☾, etc.) to spice up your bio. |
| **Privacy First** | API keys and data stay in your browser. No backend, no tracking. |

## 🚀 Usage

1. **Launch:** Open `index.html` in any modern browser.
2. **API Setup:** Paste your [Groq API key](https://console.groq.com) in the API Setup section.
3. **Configure:** Fill in your name, handle, platform, and links. Add custom links if needed.
4. **Generate:** Hit **Generate Bio** or **Generate 3 Variants** to compare styles.
5. **Style:** Choose a card theme and font in the **Card Studio** and **Typography** sections.
6. **Export:** Click **Download PNG** or **Copy Bio** to share your new identity.

## 🛠️ Technical Architecture

Aesthetic Bio Maker is built as a **zero-build static application** for maximum portability and speed.

- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties), and JavaScript (ES6+).
- **AI Integration:** Direct browser-to-API calls to Groq's Llama-3.3-70b-versatile model.
- **Rendering:** [html2canvas](https://html2canvas.hertzen.com/) for high-quality DOM-to-PNG export.
- **Persistence:** `localStorage` for API keys, history, and project management.
- **State Management:** URL-based encoding (Base64) for stateless sharing.

## 📦 Development

The project uses ESLint to maintain code quality.

```bash
# Install development dependencies
npm install

# Run linting
npm run lint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

---
*Built with intent by [vincenzo-afk](https://github.com/vincenzo-afk)*
