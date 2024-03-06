function attachEvents() {
    let getWeatherButton = document.getElementById('submit');

    getWeatherButton.addEventListener('click', getWeatherHandler);
    let locationInput = document.getElementById('location');

    let conditions = {
        Sunny: () => '☀',
        'Partly sunny': () => '⛅',
        Overcast: () => '☁',
        Rain: () => '☂',
        Degrees: () => '°'
    };


    function getWeatherHandler() {
        let forecastContainer = document.getElementById('forecast');
        forecastContainer.style.display = 'block';

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(body => body.json())
            .then(locations => {
                let locationName = locationInput.value;
                let location = locations.find(x => x.name === locationName);

                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(body => body.json())
                    .then(currentWeatherReport => ({ code: location.code, currentWeatherReport }));
            })
            .then(({ code, currentWeatherReport }) => {
                let htmlReport = createCurrentWeatherElement(currentWeatherReport);
                let currentForecastContainer = document.querySelector('#current');
                currentForecastContainer.appendChild(htmlReport);

                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
            })
            .then(body => body.json())
            .then(upcomingWeatherReport => {
                console.log(upcomingWeatherReport);

            });

        function createUpcomingWeatherElement(weatherReport) {
            let forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add('forecast-info');

            let upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.textContent = conditions[weatherReport.forecast.condition]();



        };

        function createDayReport() { }

        function createCurrentWeatherElement(weatherReport) {
            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');

            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add('condition', 'symbol');
            conditionSymbolSpan.textContent = conditions[weatherReport.forecast.condition]();

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');

            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data');
            nameSpan.textContent = weatherReport.name;

            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${weatherReport.forecast.low}/${weatherReport.forecast.high}°`;

            let weatherSpan = document.createElement('span');
            weatherSpan.classList.add('forecast-data');
            weatherSpan.textContent = weatherReport.forecast.condition;

            conditionSpan.appendChild(nameSpan);
            conditionSpan.appendChild(tempSpan);
            conditionSpan.appendChild(weatherSpan);

            forecastsDiv.appendChild(conditionSymbolSpan);
            forecastsDiv.appendChild(conditionSpan);

            return forecastsDiv;
        }


    }
}

attachEvents();