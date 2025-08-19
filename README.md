# URL Logger Extension

A simple browser extension that logs visited URLs and their loaded resources into the DevTools console.

## Features
- Logs the **main URLs visited**.
- Logs the **resources loaded** (CSS, JS, images, etc.).
- Runs in the background (no popup UI).
- Works in Chromium-based browsers (Chrome, Brave, Edge, etc.).

## Installation

1. Download or clone this repository to your local machine.
2. Open your Chromium-based browser and go to:
   ```
   chrome://extensions/
   ```
   (For Brave: `brave://extensions/`, for Edge: `edge://extensions/`)
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project folder containing:
   - `manifest.json`
   - `background.js`
5. The extension should now appear in your list of extensions as **URL Logger**.

## Usage

1. Open **DevTools Console**:
   - Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
   - Or right-click on the page → Inspect → Console tab.
2. Visit any website.
3. The console will show logs such as:
   ```
   Main URL visited: https://example.com/
   Resource URL loaded: https://example.com/script.js
   ```

## Notes
- Some requests (like blocked trackers) may not appear if the browser blocks them before they’re requested.
- The extension currently only logs to the console. You can extend it to store logs using `chrome.storage` or export them if needed.

## Files
- `manifest.json` → Defines the extension configuration.
- `background.js` → Background script that listens for requests and logs URLs.
- `README.md` → Setup and usage instructions.

---

✅ You’re all set! Enable the extension, open DevTools, and start browsing to see the logs.
