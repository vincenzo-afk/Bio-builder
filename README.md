# Aesthetic Bio Maker

A minimal, Notion-style bio builder. Fill in your profile details, generate an aesthetic bio with Groq AI, style it as a profile card, and export a clean PNG for your link-in-bio, Discord, GitHub, or anywhere else.

Everything runs in the browser. Your data (form values, API key, bio history, saved projects) is stored in `localStorage` and never leaves your device.

![v2.0](https://img.shields.io/badge/version-v2.0-blue)
[![Lint](https://github.com/vincenzo-afk/Bio-builder/actions/workflows/lint.yml/badge.svg)](https://github.com/vincenzo-afk/Bio-builder/actions/workflows/lint.yml)

## Features

| Feature | Description |
| --- | --- |
| **AI bio generation** | Generates a bio with Groq (Llama 3.3) from your details — or 3 variants to compare |
| **Card Studio** | Live preview card with 4 themes: Notion, Glass, Paper, Neon |
| **Typography** | 5 font styles synced across output and preview |
| **Symbol palette** | Click any aesthetic symbol to insert it at your cursor |
| **Platform presets** | One-click setup for Instagram, X, TikTok, Discord, GitHub, LinkedIn |
| **PNG export** | Download your card as a PNG via html2canvas |
| **History** | Last 5 generated bios auto-saved locally |
| **Saved projects** | Name and restore full form configurations |
| **Theme** | Dark/light mode, remembered between visits |

## Usage

1. Open `index.html` in any modern browser (or serve it with any static file server).
2. Paste your [Groq API key](https://console.groq.com) into the API Setup step. It is saved in your browser only.
3. Fill in your profile details (name, handle, platform, tone, aesthetic, links).
4. Hit **Generate Bio** (or **Generate 3 Variants** to compare) and pick the one you like.
5. Switch card themes and fonts until it looks right, then **Copy Bio** or **Download PNG**.

## Development

```bash
npm install   # installs ESLint (dev only — the app itself has no build step)
npm run lint  # lints app.js
```

The app is three static files (`index.html`, `style.css`, `app.js`) plus a CDN dependency (html2canvas). No framework, no bundler.

## Notes

- The API key is persisted in `localStorage` so you don't have to re-paste it on every visit.
- Link fields accept well-formed `http://` / `https://` URLs only; invalid URLs are silently omitted from the card rather than rendered as broken pills.

## License

ISC — see [LICENSE](LICENSE).
