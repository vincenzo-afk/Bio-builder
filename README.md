# ✦ Aesthetic Bio Maker

A minimal, Notion-style profile builder for creating polished bios, profile cards, and social banners. Fill in your profile details, generate platform-ready bios with Groq AI, style the result, and export a shareable PNG for GitHub, LinkedIn, X, YouTube, Discord, portfolios, or link-in-bio pages.

The project is a **zero-build static web app**. Profile data, API keys, bio history, saved projects, brand settings, and banner designs are stored locally in the browser through `localStorage`; there is no application backend or account system.

## Features

| Feature | Description |
| :--- | :--- |
| **AI Bio Generation** | Generate polished, platform-aware bios with Groq’s Llama 3.3 model. |
| **Bio Variants** | Generate Minimal, Poetic, and Bold alternatives, then use or copy the preferred version. |
| **Bio Quality Assistant** | Check character limits, missing profile context, suspicious links, unusual handles, and accidental API-key text before sharing. |
| **Card Studio** | Preview and export profile cards using Notion, Glass, Paper, or Neon themes. |
| **Custom Links** | Add up to four extra link pills for TikTok, YouTube, LinkedIn, a portfolio, or another destination. |
| **Bio Banner Builder** | Design headers for GitHub, LinkedIn, X, YouTube, and portfolio pages with editable headline, supporting line, accent color, alignment, avatar visibility, handle visibility, background, and safe-area overlay. |
| **Template Gallery** | Apply coordinated card, banner, font, and accent combinations with one click. Template application is undoable. |
| **Brand Kit** | Save reusable accent colors, tagline, and CTA values, then apply them to designs without retyping. |
| **Undo and Redo** | Recover profile and banner edits with toolbar buttons or `Ctrl/Cmd+Z` and `Ctrl/Cmd+Shift+Z`. |
| **Project Backups** | Export the current project as versioned JSON and import it on another browser or device. |
| **Project Management** | Save, load, duplicate, rename, favorite, and delete local projects. |
| **Export Controls** | Choose filename, 1×/2×/3× scale, transparent or white background, and exact card/banner dimensions. |
| **Platform Presets** | Apply platform-aware bio settings and map common platforms to suitable banner presets. |
| **Shareable Setup** | Encode the current profile configuration into a URL without including the API key or avatar image. |
| **Offline Editing** | Cache the static application as a progressive web app. Local editing and export can work offline after the app has been loaded; AI generation still requires connectivity. |
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

To protect a project, use **Export backup** in Saved Projects. The resulting JSON file contains a versioned project document and excludes the separately stored API key. Use **Import backup** to validate and restore it later.

## Technical architecture

Aesthetic Bio Maker is built as a **zero-build static application** for portability and easy self-hosting.

| Layer | Implementation |
| :--- | :--- |
| Frontend | Vanilla HTML5, CSS custom properties, and modern JavaScript |
| AI integration | Direct browser-to-Groq API request using `llama-3.3-70b-versatile` |
| Rendering | `html2canvas` for profile-card and banner PNG output |
| Persistence | Browser `localStorage` for preferences, history, projects, avatar data, brand kit, and banner state |
| Sharing | Base64-encoded URL payload that excludes the API key and uploaded avatar |
| Offline shell | `manifest.webmanifest` and `sw.js` cache same-origin application assets |
| Quality checks | ESLint plus deterministic source smoke checks through npm scripts |

Because the Groq request is made directly from the browser, users should treat their API key as a local development credential. The app does not provide a server-side proxy or secret-management layer.

## Development

Install the locked development dependencies and run the repository’s checks:

```bash
npm ci
npm run lint
npm run check
```

`npm run check` validates required UI hooks and implementation markers without needing a browser or external API. The GitHub Actions workflow runs both linting and the source smoke check.

Manual browser verification should cover profile editing, quality warnings, template application, undo/redo, brand-kit application, project export/import, saved-project actions, banner preset changes, responsive preview behavior, offline shell registration, and PNG export. AI generation requires a valid Groq key and network access.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Keep changes focused, avoid committing API keys or generated exports, and run `npm run lint` and `npm run check` before submitting.

## License

This project is licensed under the **ISC License**. See [LICENSE](LICENSE) for the complete terms.

---

Built with intent by [vincenzo-afk](https://github.com/vincenzo-afk).
