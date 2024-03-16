function attachEvents() {
    const inputLocationRef = document.getElementById('location');
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastRef = document.getElementById('forecast');
    const currForRef = document.getElementById('current');

    const getWBtn = document.getElementById('submit');
    getWBtn.addEventListener('click', getWeather);

    let conditions = {
        Sunny: '☀',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°'
      };

    async function getWeather() {
        try {
            const userInput = inputLocationRef.value;
            forecastRef.style.display = 'block';

            const response = await fetch(baseURL);
            const data = await response.json();

            const currentLocationData = data.find(x => x.name === userInput);

            await fillTodayData(currentLocationData.code);
            await fillUpcomingData(currentLocationData.code);

        } catch (error) {
            forecastRef.textContent = 'Error';

        }
    }

    async function fillTodayData(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        const todayInfo = createForecastDivToday(data);
        // currForRef.appendChild(todayInfo);
    }

    function createForecastDivToday(data){

        const forecastsDiv = document.createElement('div')
        forecastsDiv.classList.add('forecasts')

        const span = document.createElement('span')
        span.classList.add('condition')
        span.classList.add('symbol')

        const spanData = document.createElement('span')
        spanData.classList.add('condition')




    }


    async function fillUpcomingData(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const response = await fetch(url);
        const data = await response.json();
    }

}



attachEvents();