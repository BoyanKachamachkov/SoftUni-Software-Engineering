function attachEvents() {

  const getWeatherBtn = document.getElementById('submit');
  getWeatherBtn.addEventListener('click', getWeather);
  const forecastRef = document.getElementById('forecast');
  const currentRef = document.getElementById('current');
  const upcomingRef = document.getElementById('upcoming');
  const baseLocationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
  const userInputRef = document.getElementById('location');

  let conditions = {
    Sunny: () => '☀',
    'Partly sunny': () => '⛅',
    Overcast: () => '☁',
    Rain: () => '☂',
    Degrees: () => '°'
  };

  async function getWeather(e) {
    const userInput = userInputRef.value;
    forecastRef.style.display = 'block';
    const locationResponse = await fetch(baseLocationsURL);
    const locationData = await locationResponse.json();

    const currentLocationData = locationData.find(x => x.name === userInput);
    fillTodayData(currentLocationData.code);
  }

  async function fillTodayData(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
    const data = await response.json();
    debugger;

  }

  function createTodayForecast(data) {
    const container = document.createElement('div');
    container.classList.add = 'forecasts ';

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add = 'condition symbol';
    conditionSpan.textContent = conditions[data.condition]();

    container.appendChild(conditionSpan);

    const spanContainer = document.createElement('span');
    spanContainer.classList.add('condition');
  }


}

attachEvents();