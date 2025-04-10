const introSkipCheck = document.getElementById('intro-skip')
const outroSkipCheck = document.getElementById('outro-skip')

introSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ introSkip: this.checked })
});

outroSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ outroSkip: this.checked })
})

chrome.storage.local.get(['introSkip', 'outroSkip'],
  ({ introSkip, outroSkip }) => {
    if (introSkip) introSkipCheck.checked = true;
    if (outroSkip) outroSkipCheck.checked = true;
  }
);