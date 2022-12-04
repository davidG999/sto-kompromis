const numberLink = document.querySelector('.top-bar__phone-numbers a')
const copyImg = document.querySelector('.copy-img')

copyImg.addEventListener('click', e => navigator.clipboard.writeText(numberLink.textContent))
copyImg.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    navigator.clipboard.writeText(numberLink.textContent)
  }
})
