const toggleBtn = document.querySelector('.theme-toggle-button')
const sunMoonContainer = document.querySelector('.sun-moon-container')


toggleBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark')
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))

  sunMoonContainer.style.setProperty('--rotate', currentRotation + 180)
})


