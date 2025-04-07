const introSkipCheck = document.getElementById("intro-skip")

introSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ introSkip: this.checked })
});

chrome.storage.local.get(["introSkip"],
  ({ introSkip }) => {
    if (introSkip) {
      introSkipCheck.checked = true;
    }
  }
);