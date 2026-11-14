# TaskBell — Standalone Task Clock & Countdown

A beautiful, dependency-free clock and task countdown timer that runs in your browser.

## Quick start

1. Download or clone this repository.
2. Open `index.html` in a modern desktop or mobile browser.
3. Enter a task name and time, then click **Start countdown**.
4. Leave the tab open and enable your device's sound to hear the bell.

No npm install, build step, server, account, API key, or internet connection is needed.

## Features

- Live clock showing your local time, date and time zone
- Run multiple named countdown timers concurrently
- Pause, resume, reset, restart, dismiss, and delete timers
- Audible synthesized bell (no audio files or services needed)
- Optional desktop notification (requires HTTPS or localhost and permission)
- Timers and preferences saved to browser localStorage
- Deadline-based timers stay accurate if the tab sleeps or is refreshed
- Mobile-responsive dark interface, keyboard-accessible controls

## Important browser limitations

- Keep the tab/browser open to hear the bell. Browsers suspend or prohibit audio after the page closes, and may throttle background tabs. When returning to the page, overdue timers become completed; the bell cannot ring retroactively while the browser was closed.
- Audio may be blocked until you interact with the page. Starting a timer or pressing **Test bell** unlocks the audio in compatible browsers.
- Desktop notifications require a secure origin (HTTPS or localhost), supported browser, and explicit permission. They are optional; the app otherwise works when opened directly from disk.
- Timer data is stored on this device and browser profile, not synced between devices. Clearing site data removes it.

## Deploy

This is a static website. Deploy the repository root directly to GitHub Pages, Vercel, Netlify, Cloudflare Pages, or any static host. For Vercel use **Framework Preset: Other** and no build command; output directory can remain the repository root.

## Privacy

All timer data stays in your browser. No trackers, accounts, external scripts, or network requests.

## License

MIT (see LICENSE).

## GitHub Pages (automatic deployment)

The included `.github/workflows/deploy-pages.yml` deploys the static site on pushes to `main`.

1. Create a **public** GitHub repository named `taskbell-clock` (recommended for GitHub Pages on GitHub Free).
2. Upload **all contents of this folder to the repository root** (not the enclosing `taskbell-clock` folder), including the hidden `.github` directory and `.nojekyll` file.
3. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. Open **Actions**, then run **Deploy TaskBell to GitHub Pages** if it has not already run. The result should be available at `https://YOUR_USERNAME.github.io/taskbell-clock/` once the workflow succeeds.

The repo must use `main` as its default branch for the automatic push trigger. No npm, keys or environment variables are necessary.

## Version 1.5

Use the ⚙ Settings button for four themes, alarm preferences, JSON backup and restore. Star a timer to add it to your favorite presets; select a favorite to start a fresh countdown. Drag timer cards to reorder, or use the keyboard-accessible up/down buttons. Select ✎ to edit a timer; changing its duration restarts its countdown from the new duration. Backup files preserve timers, history, Pomodoro, preferences and favorites.

Run `npm test` for dependency-free Node.js regression checks. GitHub Actions runs the suite on pushes and pull requests.
