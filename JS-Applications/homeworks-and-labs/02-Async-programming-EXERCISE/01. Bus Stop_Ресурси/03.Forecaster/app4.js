function attachEvents() {

    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeatherData);
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const usrInputRef = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');

    const conditions = {
        Sunny: '☀',
        'Partly Sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',
    };

    async function getWeatherData(e) {
        const usrInput = usrInputRef.value;
        forecastDiv.style.display = 'block';

        const response = await fetch(baseURL);
        const data = await response.json();
        const currentLocation = data.find(x => x.name === usrInput);

        await getTodayData(currentLocation.code);
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

    function spanGenerator(classContainer, classSpan, name, data) {
        // create 4 spans, 1 is parent

        const parentSpan = document.createElement('span');
        parentSpan.classList.add(classContainer);

        const nameOrSymbolSpan = document.createElement('span');
        nameOrSymbolSpan.classList.add(classSpan);

        classSpan === 'symbol' ? nameOrSymbolSpan.textContent = conditions[data.condition] : nameOrSymbolSpan.textContent = name;

        const degreeSpan = document.createElement('span');
        degreeSpan.classList.add('forecast-data');
        degreeSpan.textContent = `${data.low}°/${data.high}°`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = data.condition;

        parentSpan.appendChild(nameOrSymbolSpan);
        parentSpan.appendChild(degreeSpan);
        parentSpan.appendChild(conditionSpan);

        return parentSpan;

    }



}



attachEvents();