const dataUia = ['player-skip-intro', 'next-episode-seamless-button', 'player-skip-recap']

const settingObject = {
  introSkip: false,
  outroSkip: false,
  recapSkip: false
}

chrome.storage.local.get(['introSkip', 'outroSkip', 'recapSkip'], ({ introSkip, outroSkip, recapSkip }) => {
  settingObject.introSkip = introSkip
  settingObject.outroSkip = outroSkip
  settingObject.recapSkip = recapSkip
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  settingObject.introSkip = changes.introSkip.newValue;
  settingObject.outroSkip = changes.outroSkip.newValue;
  settingObject.recapSkip = changes.recapSkip.newValue;
});

const skipHandler = () => {
  const querySelect = document.querySelectorAll('button')

  querySelect.forEach((button) => {

    const attribute = button.getAttribute('data-uia')

    if(dataUia.includes(attribute)) {
      if(attribute === 'player-skip-intro' && settingObject.introSkip) button.click()
      if(attribute === 'next-episode-seamless-button' && settingObject.outroSkip) button.click()
      if(attribute === 'player-skip-recap' && settingObject.recapSkip) button.click()
    }
  })
}

setInterval(() => skipHandler(), 500);