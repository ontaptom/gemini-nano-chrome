# Gemini Nano Experiments for Chrome

This repository contains tools and examples for experimenting with Gemini Nano in the Chrome browser. As of July 16, 2024, this project requires Chrome Dev or Chrome Canary (version 127 or higher).

## Getting Started

### Prerequisites

1. Install Chrome Dev or Chrome Canary (version 127 or higher).
2. Enable the following Chrome flags:
   - Set `chrome://flags/#prompt-api-for-gemini-nano` to "Enabled"
   - Set `chrome://flags/#optimization-guide-on-device-model` to "Enabled BypassPrefRequirement"
3. Reload the browser.
4. Go to `chrome://components` and click "Check for Update" on "Optimization Guide On Device Model".

Note: It may take some time after the initial installation for the model to download and become available on your device.

### Verifying Setup

To verify that everything is working correctly:

1. Open the browser console:
   - Windows/Linux: `Shift + CTRL + J`
   - macOS: `Option + ⌘ + J`
2. Run the following code:
   ```js
   await ai.canCreateTextSession()
   ```
3. You should see:
   ```js
   'readily'
   ```
4. If you see other ouput you can navigate to `chrome://components`, look for "Optimization Guide on Device Mode" and click "Check for update". It might take some time for browser to download and enable the model, I left the browser for around an hour to do it's thing ;).

## Repository Contents

- `nano.html`: Simple page to interact with the Gemini Nano model
- `nano-stream.html`: Page to interact with the model using streaming responses
- `nano-explain/`: Chrome extension for quick explanations using Gemini Nano

## Usage

### HTML Pages

You can use `nano.html` or `nano-stream.html` to start interacting with the model:

1. Download the HTML file to your local drive.
2. Open it with Chrome (version 127 or higher).
3. These pages work offline, allowing you to interact with Gemini Nano locally.

### Nano Explain Chrome Extension

See the [Nano Explain Extension](#nano-explain-extension) section for installation instructions.

## Nano Explain Extension

### Installation

1. Clone this repository or download it as a ZIP file.
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the `nano-explain` directory from this repository.

### Usage

1. Select any text on a webpage.
2. Right-click to open the context menu.
3. Choose "Nano Explain" from the context menu.
4. An alert will appear with a simplified explanation of the selected text.

## Customization

Feel free to modify the extension code or HTML files to suit your needs. The main files are:

- `nano-explain/background.js`: Contains the core logic for the extension.
- `nano-explain/manifest.json`: Defines the extension's properties and permissions.
- `nano.html` and `nano-stream.html`: Provide interfaces for interacting with Gemini Nano.

## Tutorial

For a visual guide on setting up and using this project, check out our YouTube tutorial: [Placeholder for link]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the terms of the Apache License 2.0. See the `LICENSE` file for more details.
