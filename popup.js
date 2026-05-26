// Update the display when the popup opens
chrome.storage.local.get(["count"], (result) => {
  const currentCount = result.count || 0;
  document.getElementById("count-display").textContent = currentCount;
});
