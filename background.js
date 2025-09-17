chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ introSkip: true });
  chrome.storage.local.set({ outroSkip: true });
  chrome.storage.local.set({ recapSkip: true });
});