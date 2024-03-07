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

    await fillTodayData(currentLocationData.code);
    await fillUpcomingData(currentLocationData.code);
  }

  async function fillTodayData(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
    const data = await response.json();

    const todayInfo = createTodayForecast(data);
    currentRef.appendChild(todayInfo);

  }

  function createTodayForecast(data) {
    const forecastsDiv = document.createElement('div');
    forecastsDiv.classList.add = 'forecasts';

    const condSymbolSpan = document.createElement('span');
    condSymbolSpan.classList.add('condition');
    condSymbolSpan.classList.add('symbol');
    condSymbolSpan.textContent = conditions[data.forecast.condition]();

    forecastsDiv.appendChild(condSymbolSpan);

    const condSpan = document.createElement('span');
    condSpan.classList.add('condition');

    const citySpan = document.createElement('span');
    citySpan.classList.add('forecast-data');
    citySpan.textContent = data.name;

    const degreeSpan = document.createElement('span');
    degreeSpan.classList.add('forecast-data');
    degreeSpan.textContent = `${data.forecast.low}°/${data.forecast.high}°`;

    const cityCondSpan = document.createElement('span');
    cityCondSpan.classList.add('forecast-data');
    cityCondSpan.textContent = data.forecast.condition;

    condSpan.appendChild(citySpan);
    condSpan.appendChild(degreeSpan);
    condSpan.appendChild(cityCondSpan);

    forecastsDiv.appendChild(condSpan);
    return forecastsDiv;
  }

  async function fillUpcomingData(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
    const data = await response.json();

    console.log(data);

    const upcomingInfo = createUpcomingForecast(data);
    upcomingRef.appendChild(upcomingInfo);
  }


  function createUpcomingForecast(data) {

    const forecastsInfoDiv = document.createElement('div');
    forecastsInfoDiv.classList.add('forecast-info');

    const upcomingSpan = document.createElement('span');
    upcomingSpan.classList.add('upcoming');

    const symbolSpan = document.createElement('span');
    symbolSpan.classList.add('symbol');
    symbolSpan.textContent = conditions[data.forecast.condition]();

    const degreeSpan = document.createElement('span');
    degreeSpan.classList.add('forecast-data');
    degreeSpan.textContent = `${data.forecast.low}°/${data.forecast.high}°`;

    const cityCondSpan = document.createElement('span');
    cityCondSpan.classList.add('forecast-data');
    cityCondSpan.textContent = data.forecast.condition;

    upcomingSpan.appendChild(symbolSpan);
    upcomingSpan.appendChild(degreeSpan);
    upcomingSpan.appendChild(cityCondSpan);

    forecastsInfoDiv.appendChild(upcomingSpan);
    return forecastsInfoDiv;

  }
}

attachEvents();