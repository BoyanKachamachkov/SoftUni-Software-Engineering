function attachEvents() {
    const inputLocationRef = document.getElementById('location');
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastRef = document.getElementById('forecast');

    const getWBtn = document.getElementById('submit');
    getWBtn.addEventListener('click', getWeather);

    async function getWeather() {
        try {
            const userInput = inputLocationRef.value;
            forecastRef.style.display = 'block';

            const response = await fetch(baseURL);
            const data = await response.json();

            const currentLocationData = data.find(x => x.name === userInput);

            await fillTodayData(currentLocationData.code);
            debugger;

        } catch (error) {
            forecastRef.textContent = 'Error';

        }
    }

    async function fillTodayData(code) { }


}



attachEvents();