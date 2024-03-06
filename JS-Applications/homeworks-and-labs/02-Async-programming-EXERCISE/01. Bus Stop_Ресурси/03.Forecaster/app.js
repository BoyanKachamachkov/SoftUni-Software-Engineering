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

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(body => body.json())
            .then(locations => {
                let locationName = locationInput.value;
                let location = locations.find(x => x.name === locationName);
                console.log(location);

                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`);
            })
            .then(body => body.json())
            .then(currentWeatherReport => {
                console.log(currentWeatherReport);
            });

        function createCurrentWeatherElement(forecast) {
            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');

            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.classList.add('condition', 'symbol');
            conditionSymbolSpan.textContent = conditions[forecast.condition];

            let conditionSpan = document.createElement('span');
        }


    }
}

attachEvents();