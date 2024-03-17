function attachEvents() {

    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeatherData);
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations'

    async function getWeatherData(e) {

        const response = await fetch(baseURL)
        const data = await response.json()
        debugger
    }


}



attachEvents();