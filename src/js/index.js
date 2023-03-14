const body = document.body;
const lifecellLogos = document.querySelectorAll('[data-lifecell-logo]')
const copyIcon = document.querySelector('[data-copy-icon]')
const checkIcon = document.querySelector('[data-check-icon]')
const modeSection = document.querySelector('[data-mode-section]')
const lightModeBtn = document.querySelector('[data-light-mode-btn]')
const darkModeBtn = document.querySelector('[data-dark-mode-btn]')
const lightModeIcon = document.querySelector('[data-light-mode-icon]')
const darkModeIcon = document.querySelector('[data-dark-mode-icon]')

const PHONE_NUMBER = '+380931892667';

manageDefaultColorScheme();
const mode = localStorage.getItem('mode');
if (mode) {
  body.classList.add(`${mode}-mode`)
}

/* LISTENERS */

window.addEventListener('load', () => {
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

/* FUNCTIONS */

function copyNumber() {
  navigator.clipboard.writeText(PHONE_NUMBER)
  copyIcon.style.display = 'none'
  checkIcon.style.display = 'inline-block'

  setTimeout(() => {
    checkIcon.style.display = 'none'
    copyIcon.style.display = 'inline-block'
  }, 2000);
}

function manageDefaultColorScheme() {
  const lightColorScheme = window.matchMedia("(prefers-color-scheme: light)").matches;
  const darkColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (!localStorage.getItem('mode') && lightColorScheme) {
    localStorage.setItem('mode', 'light');
  } else if (!localStorage.getItem('mode') && darkColorScheme) {
    localStorage.setItem('mode', 'dark');
  }
}

function onModeSectionClick(e) {
  if (e.target === lightModeIcon || e.target === lightModeBtn) {
    localStorage.setItem('mode', 'light')
    body.classList.add('light-mode')
  } else if (e.target === darkModeIcon || e.target === darkModeBtn) {
    localStorage.setItem('mode', 'dark')
    body.classList.remove('light-mode')
  }
}