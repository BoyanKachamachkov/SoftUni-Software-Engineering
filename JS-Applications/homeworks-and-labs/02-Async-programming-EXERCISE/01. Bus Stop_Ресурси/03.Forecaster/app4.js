function attachEvents() {

    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeatherData);
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const usrInputRef = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const conditions = {
        Sunny: '☀',
        'Partly Sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',
    };

    async function getWeatherData(e) {
        currentDiv.innerHTML = '';
        upcomingDiv.innerHTML = '';

        try {
            const usrInput = usrInputRef.value;
            forecastDiv.style.display = 'block';

            const response = await fetch(baseURL);
            const data = await response.json();
            const currentLocation = data.find(x => x.name === usrInput);

            await getTodayData(currentLocation.code);
            await getUpcomingData(currentLocation.code);

        } catch (error) {
            forecastDiv.textContent = 'Error';

        }

    }

    async function getTodayData(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const response = await fetch(url);
        const data = await response.json();

        const todayInfo = createTodayForecast(data);
        currentDiv.appendChild(todayInfo);
    }


    function createTodayForecast(data) {

        const div = document.createElement('div');
        div.classList.add('forecasts');

        const span = document.createElement('span');
        span.classList.add('condition');
        span.classList.add('symbol');
        span.textContent = conditions[data.forecast.condition];

        div.appendChild(span);

        const spanContainer = spanGenerator('condition', 'forecast-data', data.name, data.forecast);

        div.appendChild(spanContainer);
        return div;
    }

    async function getUpcomingData(code) {

        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const response = await fetch(url);
        const data = await response.json();

        const upcomingInfo = createUpcomingForecast(data);
        upcomingDiv.appendChild(upcomingInfo);
    }

    function createUpcomingForecast(data) {

        const div = document.createElement('div');
        div.classList.add('forecast-info');

        const upcoming1 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[0]);
        const upcoming2 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[1]);
        const upcoming3 = spanGenerator('upcoming', 'symbol', data.name, data.forecast[2]);

        div.appendChild(upcoming1);
        div.appendChild(upcoming2);
        div.appendChild(upcoming3);

        return div;

    }

    function spanGenerator(classContainer, classSpan, name, data) {
        // create 4 spans, 1 is parent

        const parentSpan = document.createElement('span');
        parentSpan.classList.add(classContainer);

        const nameOrSymbolSpan = document.createElement('span');
        nameOrSymbolSpan.classList.add(classSpan);

        classSpan === 'symbol' ? nameOrSymbolSpan.textContent = conditions[data.condition] : nameOrSymbolSpan.textContent = name;

        const degreeSpan = document.createElement('span');
        degreeSpan.classList.add(classSpan);
        degreeSpan.textContent = `${data.low}°/${data.high}°`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add(classSpan);
        conditionSpan.textContent = data.condition;

        parentSpan.appendChild(nameOrSymbolSpan);
        parentSpan.appendChild(degreeSpan);
        parentSpan.appendChild(conditionSpan);

        return parentSpan;

    }



}



attachEvents();