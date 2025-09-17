const introSkipCheck = document.getElementById('intro-skip')
const outroSkipCheck = document.getElementById('outro-skip')
const recapSkipCheck = document.getElementById('recap-skip')

introSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ introSkip: this.checked })
});

outroSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ outroSkip: this.checked })
})

recapSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ recapSkip: this.checked })
})

chrome.storage.local.get(['introSkip', 'outroSkip', 'recapSkip'],
  ({ introSkip, outroSkip, recapSkip }) => {
    if (introSkip) introSkipCheck.checked = true;
    if (outroSkip) outroSkipCheck.checked = true;
    if (recapSkip) recapSkipCheck.checked = true;
  }
);