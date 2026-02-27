# Project Overview

This project is a comprehensive solution for integrating multiple services into a single interface, allowing for better user experience and efficiency.

## Features
- User authentication
- Service integration
- Real-time data synchronization

# Quick Start Instructions

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/cecilusmax33/SiCO.git
   ```  
2. **Navigate to the project directory:**  
   ```bash
   cd SiCO
   ```  
3. **Install dependencies:**  
   ```bash
   npm install
   ```  
4. **Start the application:**  
   ```bash
   npm start
   ```
## Method B — Download ZIP from GitHub

1.Open the repository page: 
```
https://github.com/cecilusmax33/SiCO
```
2.Click Code → Download ZIP

3.Extract the ZIP to a folder you control 


## Load the Extension Locally
1.Open chrome://extensions (or edge://extensions)

2.Turn on Developer mode (toggle in the top-right corner)

3.Click Load unpacked

4.Select the extension/ directory from this repo
Once loaded:

* Pin the extension in your browser toolbar for easy access
* You'll see the SiCO icon in your toolbar

## **Use the Feature**
Via Right-Click Menu
* Open any webpage
* Right-click anywhere on the page
* Select "View Source in SiCO Sidebar"
* The sidebar opens with the page source

## **Via Toolbar Icon**
* Click the SiCO icon in your toolbar
* The sidebar opens and auto-captures the current page source

## **Sidebar Actions**
Once the source is loaded, use these tools:

 * Refresh: Re-capture the latest source from the active page
 * Copy: Copy the entire source to your clipboard
 * Save: the (possibly edited) source as an .html file
 * Print: Open a print dialog for the source code
You can also edit the source directly in the textarea.


## Metadata 
The sidebar displays:

URL — The page's full URL (read-only)

Title — The page's title (read-only)

Status — Timestamp and operation messages


## *Production Launch Checklist*
Before publishing to Chrome Web Store or Edge Add-ons:

* Bump version in manifest.json
* Replace placeholder icons in extension/src/icons/
* Review and minimize permissions in manifest.json for release
* Test on Chrome stable + Edge stable
* Run security and performance audits
* Create a signed package via Chrome Web Store / Edge Add-ons submission pipelines
* Write release notes
* Update version and changelog in README

  
## *Notes & Limitations*

* Works offline as an installed extension
* Source payloads are cached per tab in chrome.storage.local for instant access
* Some restricted internal pages do not allow source extraction by design:
* Browser settings pages (e.g., chrome://settings)
* Extension management pages (e.g., chrome://extensions)
* Other privileged URLs
* Popup blocker must allow popups if you want to use the Print feature
* The extension uses Manifest V3 (latest Chrome extension standard)


 ## *Troubleshooting*
 
# "View Source in SiCO Sidebar" doesn't appear
 * Reload the extension (disable and re-enable in chrome://extensions)
 * Clear browser cache and restart Chrome/Edge

# Source won't load
 * Ensure you're on a public webpage (not a restricted browser page)
 * Try clicking Refresh in the sidebar
 * Check the browser console for errors

# Save/Print doesn't work
 * Save: Ensure downloads are enabled in your browser settings
 * Print: Check that popups are allowed for this site

# Performance issues
 * Close other browser tabs to free up memory
 * Clear chrome.storage.local via DevTools → Application → Storage


## *Development*
To modify the extension:

1.)Edit files in the extension/ folder

2.)Go to chrome://extensions

3.)Find SiCO and click the Reload button

4.)Changes take effect immediately

## File Structure 
```                                             extension/
├── manifest.json           — Extension configuration
├── src/
│   ├── background.js       — Service worker
│   ├── content.js          — Content script
│   ├── sidebar.html        — UI markup
│   ├── sidebar.css         — Styles
│   ├── sidebar.js          — UI logic
│   └── icons/              — Icon assets
└── README.md               — This file
```
# Support & Feedback
If you encounter issues or have suggestions:

1.Check the https://github.com/cecilusmax33/SiCO/issues
2.Open a new issue with details about your problem
3.Include your Chrome/Edge version and OS

## Ready to inspect your web pages!

For detailed documentation, refer to the [Documentation](link_to_documentation).
