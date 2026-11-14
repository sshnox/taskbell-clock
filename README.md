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
