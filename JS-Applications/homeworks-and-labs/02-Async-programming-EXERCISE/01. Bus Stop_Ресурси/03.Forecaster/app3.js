function attachEvents() {
    const inputLocationRef = document.getElementById('location');
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastRef = document.getElementById('forecast');
    const currForRef = document.getElementById('current');
    const upcomingRef = document.getElementById('upcoming');


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
        currForRef.appendChild(todayInfo);
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
        const spanContainer = spanGenerator('condition', 'forecast-data', data.name, data.forecast);

        forecastsDiv.appendChild(spanContainer);
        return forecastsDiv;
    }


    async function fillUpcomingData(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        const upcomingInfo = createForecasDivUpcoming(data);
        upcomingRef.appendChild(upcomingInfo);
    }

    function createForecasDivUpcoming(data) {

        const forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecast-info');

        const upcoming1 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[0]);
        const upcoming2 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[1]);
        const upcoming3 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[2]);

        forecastsDiv.appendChild(upcoming1);
        forecastsDiv.appendChild(upcoming2);
        forecastsDiv.appendChild(upcoming3);
        return forecastsDiv;
    }


    function spanGenerator(classContainer, classSpan, name, data) {

        const parentSpan = document.createElement('span');
        parentSpan.classList.add(classContainer);

        const nameOrSymbolSpan = document.createElement('span');
        nameOrSymbolSpan.classList.add(classSpan);
        // check when each?
        classSpan === 'symbol' ? nameOrSymbolSpan.textContent = conditions[data.condition] : nameOrSymbolSpan.textContent = name;

        const degreeSpan = document.createElement('span');
        degreeSpan.classList.add('forecast-data');
        degreeSpan.textContent = `${data.low}°/${data.high}°`;

        const cityCondSpan = document.createElement('span');
        cityCondSpan.classList.add('forecast-data');
        cityCondSpan.textContent = data.condition;

        parentSpan.appendChild(nameOrSymbolSpan);
        parentSpan.appendChild(degreeSpan);
        parentSpan.appendChild(cityCondSpan);

        return parentSpan;
    }

}



attachEvents();