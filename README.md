# TaskBell — Focus & Countdown

A standalone productivity timer with a local clock, named countdowns, Pomodoro focus sessions, alarms, history and an installable app experience. No framework, backend, account, or paid service required.

## Live app

https://sshnox.github.io/taskbell-clock/

## Features

- Multiple concurrent named countdown timers, pause/resume/reset/restart, five-minute snooze, and continuously repeating timers.
- Six generated alarm tones with per-task selection, global volume, preview, and 1–5 repeated alert rings.
- Quick duration presets: 5, 15, 25, 30, and 60 minutes.
- Customizable Pomodoro focus/break durations, rounds, automatic phase transitions, start/pause/skip/reset.
- Completed-session history, daily/weekly summary, seven-day chart and CSV export.
- Floating mini timer with Document Picture-in-Picture on supported Chromium browsers, full-screen focus button and keyboard shortcuts.
- PWA manifest and service worker for install/offline support where the browser allows it.
- Existing saved timers preserved via `taskbell.timers.v1`; everything remains local to this browser profile.

## Usage

Open the GitHub Pages URL, or open `index.html` locally. Create a countdown on the right-hand panel. Set a specific alarm tone per timer, or use a quick preset. Pomodoro and productivity panels are below the timers.

**Shortcuts:** Space = start/pause Pomodoro, N = focus new task, F = toggle fullscreen (when not typing in a field).

## Limitations

Keep the tab open to reliably hear alarms. Closed browsers cannot run alarm audio or guarantee background notifications. Browser audio may require an initial user interaction. Browser install and floating Picture-in-Picture depend on the device and browser; GitHub Pages uses HTTPS for supported capabilities. Timers and productivity data do not sync across devices. Offline support applies after successfully loading the deployed site.

## Deploy

GitHub Actions deploys the static repository root on pushes to `main` using `.github/workflows/deploy-pages.yml`. No build step needed. In repository Settings → Pages, set the publishing source to **GitHub Actions**.

## Privacy

All session history and timer information is stored locally in browser localStorage. No external tracking or database.

## License

MIT.
