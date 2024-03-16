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

    function createForecastDivToday(data) {

        const forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecasts');

        const condSymbolSpan = document.createElement('span');
        condSymbolSpan.classList.add('condition');
        condSymbolSpan.classList.add('symbol');
        condSymbolSpan.textContent = conditions[data.forecast.condition];

        forecastsDiv.appendChild(condSymbolSpan);

        // 2nd span with another F

        // const spanContainer = generateSpan('condition', 'forecast-data', data.name, data.forecast)
        debugger;




    }


    async function fillUpcomingData(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const response = await fetch(url);
        const data = await response.json();
    }


    function generateSpan(classContainer, classSpan, name, data) {

        const fatherSpan = document.createElement('span');
        fatherSpan.classList.add(classContainer);

        const nameOrSymbolSpan = document.createElement('span');
        nameOrSymbolSpan.classList.add(classSpan);
        // check when each?
        classSpan === 'symbol' ? nameOrSymbolSpan.textContent = conditions[data.condition] : nameOrSymbolSpan.textContent = name;
    }

}



attachEvents();