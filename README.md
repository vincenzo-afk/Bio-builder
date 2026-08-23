# ✦ Aesthetic Bio Maker

A minimal, Notion-style profile builder for creating polished bios, profile cards, and social banners. Fill in your profile details, generate platform-ready bios with Groq AI, style the result, and export a shareable PNG for GitHub, LinkedIn, X, YouTube, Discord, portfolios, or link-in-bio pages.

The project is a **zero-build static web app**. Profile data, API keys, bio history, saved projects, and banner designs are stored locally in the browser through `localStorage`; there is no application backend or account system.

## Features

| Feature | Description |
| :--- | :--- |
| **AI Bio Generation** | Generate polished, platform-aware bios with Groq’s Llama 3.3 model. |
| **Bio Variants** | Generate Minimal, Poetic, and Bold alternatives, then use or copy the preferred version. |
| **Card Studio** | Preview and export profile cards using Notion, Glass, Paper, or Neon themes. |
| **Profile Workspace** | Keep identity details, links, avatar, typography, card theme, history, and saved projects together. |
| **Custom Links** | Add up to four extra link pills for TikTok, YouTube, LinkedIn, a portfolio, or another destination. |
| **Bio Banner Builder** | Design headers for GitHub, LinkedIn, X, YouTube, and portfolio pages with editable headline, supporting line, accent color, alignment, avatar visibility, handle visibility, background, and safe-area overlay. |
| **Banner Templates** | Start from GitHub profile, LinkedIn cover, X header, YouTube channel art, or portfolio hero dimensions. |
| **PNG Export** | Export profile cards and banners as PNG files at the selected target dimensions. |
| **Shareable Setup** | Encode the current profile configuration into a URL without including the API key or avatar image. |
| **Local Persistence** | Restore history, saved projects, banner settings, and uploaded avatars on the same device where supported by the browser. |
| **Privacy First** | The Groq key is entered by the user and stored locally; never commit it to the repository or share it in a public URL. |

## Banner presets

The banner builder uses platform-oriented output dimensions and displays a dotted safe-area guide for layouts that may be cropped on smaller screens.

| Preset | Output dimensions | Intended use |
| :--- | :---: | :--- |
| GitHub profile | 1280 × 640 px | Profile README or developer identity header |
| LinkedIn cover | 1584 × 396 px | Professional profile cover |
| X / Twitter header | 1500 × 500 px | Social profile header |
| YouTube channel art | 2560 × 1440 px | Channel branding canvas |
| Portfolio hero | 1600 × 600 px | Website or personal landing-page hero |

The preview scales to the selected aspect ratio, while export renders the design at the exact preset dimensions. The export path uses [html2canvas](https://html2canvas.hertzen.com/) and includes compatibility-safe styling for the browser renderer.

## Usage

Open `index.html` in a modern browser, or serve the project locally for more predictable browser behavior:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.

To generate a bio, paste a [Groq API key](https://console.groq.com) into the API Setup section, complete the profile fields, choose a platform and tone, and select **Generate Bio** or **Generate 3 Variants**. Use Card Studio and Typography to style the profile card, then choose **Download PNG** or **Copy Bio**.

To build a banner, open **Banner Builder** from the workspace sidebar, select a platform preset, choose a background, edit the headline and supporting line, adjust the accent and alignment, and download the result. The banner automatically uses the current name, handle, identity line, and avatar from the profile workspace.

## Technical architecture

Aesthetic Bio Maker is built as a **zero-build static application** for portability and easy self-hosting.

| Layer | Implementation |
| :--- | :--- |
| Frontend | Vanilla HTML5, CSS custom properties, and modern JavaScript |
| AI integration | Direct browser-to-Groq API request using `llama-3.3-70b-versatile` |
| Rendering | `html2canvas` for profile-card and banner PNG output |
| Persistence | Browser `localStorage` for preferences, history, projects, avatar data, and banner state |
| Sharing | Base64-encoded URL payload that excludes the API key and uploaded avatar |
| Quality checks | ESLint through the repository’s `npm run lint` script |

Because the Groq request is made directly from the browser, users should treat their API key as a local development credential. The app does not provide a server-side proxy or secret-management layer.

## Development

Install the locked development dependencies and run the repository’s lint command:

```bash
npm ci
npm run lint
```

The app does not currently include a framework build pipeline or automated browser-test suite. Manual verification should cover profile editing, card theme changes, bio generation error states, saved projects, banner preset changes, responsive preview behavior, and PNG export.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Keep changes focused, avoid committing API keys or generated exports, and run `npm run lint` before submitting.

## License

This project is licensed under the **ISC License**. See [LICENSE](LICENSE) for the complete terms.

---

Built with intent by [vincenzo-afk](https://github.com/vincenzo-afk).
