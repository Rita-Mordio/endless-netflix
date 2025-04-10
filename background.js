chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ introSkip: true });
});