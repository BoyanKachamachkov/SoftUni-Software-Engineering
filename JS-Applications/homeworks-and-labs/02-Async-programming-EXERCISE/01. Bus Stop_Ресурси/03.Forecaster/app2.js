function attachEvents() {

  const getWeatherBtn = document.getElementById('submit');
  getWeatherBtn.addEventListener('click', getWeather);
  const forecastRef = document.getElementById('forecast');
  const currentRef = document.getElementById('current');
  const upcomingRef = document.getElementById('upcoming');
  const baseLocationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
  const userInputRef = document.getElementById('location');

  let conditions = {
    Sunny: '☀',
    'Partly sunny': '⛅',
    Overcast: '☁',
    Rain: '☂',
    Degrees: '°'
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

    const upcomingInfo = createUpcomingForecast(data);
    upcomingRef.appendChild(upcomingInfo);

  }

  async function fillUpcomingData(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
    const data = await response.json();

    return createUpcomingForecast(data);

  }

  function createUpcomingForecast(data) {
    const container = document.createElement('div');
    container.classList.add('forecast-info');

    const upcoming1 = generateSpan('upcoming', data.name, data.forecast[0]);
    const upcoming2 = generateSpan('upcoming', data.name, data.forecast[1]);
    const upcoming3 = generateSpan('upcoming', data.name, data.forecast[2]);

    container.appendChild(upcoming1);
    container.appendChild(upcoming2);
    container.appendChild(upcoming3);
    return container;
  }

  function generateSpan(classes, name, data) {

    const condSpan = document.createElement('span');
    condSpan.classList.add(classes);

    const citySpan = document.createElement('span');
    citySpan.classList.add('forecast-data');
    citySpan.textContent = name;

    const degreeSpan = document.createElement('span');
    degreeSpan.classList.add('forecast-data');
    degreeSpan.textContent = `${data.low}°/${data.high}°`;

    const cityCondSpan = document.createElement('span');
    cityCondSpan.classList.add('forecast-data');
    cityCondSpan.textContent = data.condition;

    condSpan.appendChild(citySpan);
    condSpan.appendChild(degreeSpan);
    condSpan.appendChild(cityCondSpan);

    return condSpan;


  }

  function createTodayForecast(data) {
    const forecastsDiv = document.createElement('div');
    forecastsDiv.classList.add = 'forecasts';

    const condSymbolSpan = document.createElement('span');
    condSymbolSpan.classList.add('condition');
    condSymbolSpan.classList.add('symbol');
    condSymbolSpan.textContent = conditions[data.forecast.condition];

    forecastsDiv.appendChild(condSymbolSpan);

    const spanContainer = generateSpan('condition', data.name, data.forecast);

    forecastsDiv.appendChild(spanContainer);
    return forecastsDiv;
  }



}

attachEvents();