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


## Version 1.6 — Smart reminders

Create reminders for specific local dates/times, repeating daily, every week, or on selected weekdays. Upcoming items appear in a seven-day navigable agenda. Edit, pause, or delete schedules; active or missed reminders appear in an attention list with 5, 10, or 15-minute snooze and dismiss. Reminders and their alert history are kept in localStorage and included in version 2 JSON backups; version 1 backups still import (with no schedules).

**Browser limitations:** no server is involved. TaskBell schedules are evaluated while the page is running. A missed schedule (more than 60 seconds late) is recorded for review rather than ringing late. Browser/tab suspension, sleep, and closing the browser cannot guarantee background audio/notifications. Leave the app open for timely alarms. Times are interpreted in the device's current local timezone. Changes to the system timezone affect future recurring alarm calculations.
## Version 1.7 — Productivity analytics

- Assign categories and optional projects to countdown timers; completions are categorized in history.
- Choose the default category and project for Pomodoro focus sessions.
- Daily and weekly goals use completed session durations; weekly goals reset Monday in local time.
- View current streaks and breakdowns by category and project for 7/30/90 days.
- Download filtered productivity reports as CSV.
- Backups now use version 3, including analytics settings, while still accepting version 1 and 2 exports. Older entries appear under Other / Unassigned.
- All data remains local to your browser; no account or backend is required.
