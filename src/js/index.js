const copyIcon = document.querySelector('[data-copy-icon]')
const checkIcon = document.querySelector('[data-check-icon]')

copyIcon.addEventListener('click', handleCopyNumberClick);
copyIcon.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    handleCopyNumberClick()
  }
})

function handleCopyNumberClick() {
  navigator.clipboard.writeText('+380931892667')
  copyIcon.style.display = 'none'
  checkIcon.style.display = 'block'

  setTimeout(() => {
    copyIcon.style.display = 'block'
    checkIcon.style.display = 'none'
  }, 2000);
}