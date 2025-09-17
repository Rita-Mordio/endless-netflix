const LABEL_NAME = {
  en: {
    intro: 'Intro Skip',
    outro: 'Outro Skip',
    recap: 'Recap Skip',
  },
  ko: {
    intro: '인트로 건너뛰기',
    outro: '아웃트로 건너뛰기',
    recap: '줄거리 건너뛰기',
  }
}

const languageSettings = () => {
  const button = document.getElementById('settings-button')
  const menu = document.getElementById('lang-menu')
  const enRadio = document.getElementById('lang-en')
  const koRadio = document.getElementById('lang-ko')

  const updateToggleLabels = (lang) => {
    const t = LABEL_NAME[lang] || LABEL_NAME.en

    const introRow = document.getElementById('intro-skip')?.closest('.card-row')
    const outroRow = document.getElementById('outro-skip')?.closest('.card-row')
    const recapRow = document.getElementById('recap-skip')?.closest('.card-row')

    introRow?.querySelector('.toggle-label')?.replaceChildren(document.createTextNode(t.intro))
    outroRow?.querySelector('.toggle-label')?.replaceChildren(document.createTextNode(t.outro))
    recapRow?.querySelector('.toggle-label')?.replaceChildren(document.createTextNode(t.recap))
  }

  if (button && menu) {
    button.addEventListener('click', (e) => {
      e.stopPropagation()

      const isHidden = menu.hasAttribute('hidden')
      if (isHidden) menu.removeAttribute('hidden')
      else menu.setAttribute('hidden', '')
    })

    document.addEventListener('click', (e) => {
      if (!menu.hasAttribute('hidden')) {
        if (!menu.contains(e.target) && e.target !== button) menu.setAttribute('hidden', '')
      }
    })
  }

  const setLanguage = (lang) => {
    chrome.storage.local.set({ language: lang })
    updateToggleLabels(lang)
  }

  enRadio?.addEventListener('change', function(){ if (this.checked) setLanguage('en') })
  koRadio?.addEventListener('change', function(){ if (this.checked) setLanguage('ko') })

  chrome.storage.local.get(['language'], ({ language }) => {
    const lang = language || 'en'
    if (!language) chrome.storage.local.set({ language: 'en' })
    if (lang === 'ko') koRadio && (koRadio.checked = true)
    else enRadio && (enRadio.checked = true)
    updateToggleLabels(lang)
  })
}

languageSettings()