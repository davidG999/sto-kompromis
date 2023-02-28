const copyImg = document.querySelector('.js-copy-img')

copyImg.addEventListener('click', e => {
  navigator.clipboard.writeText('+380931892667')
})

copyImg.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    navigator.clipboard.writeText('+380931892667')
  }
})
