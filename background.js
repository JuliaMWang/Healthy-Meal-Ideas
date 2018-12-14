{
    "name": "Healthy Meal Ideas",
    "version": "1.0",
    "description": "Google Chrome extension providing healthy meal ideas and sample recipes.",
    "background": {
      "scripts": ["background.js"],
      "persistent": false,
      chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.set({color: '#3aa757'}, function() {
            console.log("The color is green.");
        });
      });
    },
    "manifest_version": 2
}
