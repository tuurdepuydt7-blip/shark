let postRequestCount = 0;

// Listen for outgoing network requests before they are sent
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.method === "POST") {
      postRequestCount++;
      console.log(`[Monitor] Outgoing POST request detected to: ${details.url}`);
      
      // Store the count in local extension storage so the popup can read it
      chrome.storage.local.set({ count: postRequestCount });
    }
  },
  { urls: ["<all_urls>"] }
);
