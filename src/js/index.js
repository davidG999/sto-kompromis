const lifecellLogos = document.querySelectorAll('[data-lifecell-logo]')
const copyIcon = document.querySelector('[data-copy-icon]')
const checkIcon = document.querySelector('[data-check-icon]')
const modeSection = document.querySelector('[data-mode-section]')
const lightModeBtn = document.querySelector('[data-light-mode-btn]')
const darkModeBtn = document.querySelector('[data-dark-mode-btn]')
const lightModeIcon = document.querySelector('[data-light-mode-icon]')
const darkModeIcon = document.querySelector('[data-dark-mode-icon]')

window.addEventListener('load', e => {
  copyIcon.style.display = 'inline-block'
  for (let i = 0; i < lifecellLogos.length; i++) {
    lifecellLogos[i].style.display = 'inline-block'
  }
});

copyIcon.addEventListener('click', copyNumber);
copyIcon.addEventListener('keypress', e => {
  if (e.key === 'Enter') copyNumber()
})

modeSection.addEventListener('click', onModeSectionClick)

function copyNumber() {
  navigator.clipboard.writeText('+380931892667')
  copyIcon.style.display = 'none'
  checkIcon.style.display = 'inline-block'

  setTimeout(() => {
    checkIcon.style.display = 'none'
    copyIcon.style.display = 'inline-block'
  }, 2000);
}

function onModeSectionClick(e) {
  if (e.target === lightModeIcon || e.target === lightModeBtn) {
    document.body.classList.add('light-mode')
  } else if (e.target === darkModeIcon || e.target === darkModeBtn) {
    document.body.classList.remove('light-mode')
  }
}