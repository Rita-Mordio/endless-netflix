const dataUia = ['player-skip-intro', 'next-episode-seamless-button']

const settingObject = {
  introSkip: false,
  outroSkip: false
}

chrome.storage.local.get(['introSkip', 'outroSkip'], ({ introSkip, outroSkip }) => {
  settingObject.introSkip = introSkip
  settingObject.outroSkip = outroSkip
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  settingObject.introSkip = changes.introSkip.newValue;
  settingObject.outroSkip = changes.outroSkip.newValue;
});

const skipHandler = () => {
  const querySelect = document.querySelectorAll('button')

  querySelect.forEach((button) => {

    const attribute = button.getAttribute('data-uia')

    if(dataUia.includes(attribute)) {
      if(attribute === 'player-skip-intro' && settingObject.introSkip) button.click()
      if(attribute === 'next-episode-seamless-button' && settingObject.outroSkip) button.click()
    }
  })
}

setInterval(() => skipHandler(), 500);