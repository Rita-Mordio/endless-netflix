const introSkipCheck = document.getElementById('intro-skip')
const outroSkipCheck = document.getElementById('outro-skip')
const recapSkipCheck = document.getElementById('recap-skip')

introSkipCheck.addEventListener('change', function() {
  chrome.storage.local.set({ introSkip: this.checked })
})

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
)

document.getElementById('coffee-btn').addEventListener('click', function() {
  document.getElementById('donate-modal').classList.add('show')
  document.getElementById('donate-options').style.display = 'flex'
  document.getElementById('qr-content').style.display = 'none'
})

document.getElementById('modal-close').addEventListener('click', function() {
  document.getElementById('donate-modal').classList.remove('show')
})

document.getElementById('modal-overlay').addEventListener('click', function() {
  document.getElementById('donate-modal').classList.remove('show')
})

document.getElementById('kakao-option').addEventListener('click', function() {
  document.getElementById('donate-options').style.display = 'none'
  document.getElementById('qr-content').style.display = 'flex'
})
