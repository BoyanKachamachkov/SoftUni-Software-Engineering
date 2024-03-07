function attachEvents() {

  const getWeatherBtn = document.getElementById('submit');
  getWeatherBtn.addEventListener('click', getWeather);
  const forecastRef = document.getElementById('forecast');
  const currentRef = document.getElementById('current');
  const upcomingRef = document.getElementById('upcoming');
  const baseLocationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';

  function getWeather(e) {
    forecastRef.style.display = 'block';
  }

}

attachEvents();