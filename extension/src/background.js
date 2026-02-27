'use strict';

// This is the service worker file for the SiCO extension.

self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Custom fetch handling can be implemented here
});