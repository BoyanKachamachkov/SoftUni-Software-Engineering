function attachEvents() {

    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeatherData);
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const usrInputRef = document.getElementById('location');

    async function getWeatherData(e) {
        const usrInput = usrInputRef.value;

        const response = await fetch(baseURL);
        const data = await response.json();
        const currentLocation = data.find(x => x.name === usrInput);

        const todayData = getTodayData(currentLocation.code);
    }

    async function getTodayData(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const response = await fetch(url);
        const data = await response.json();
        
        debugger;

    }

    function createTodayForecast(){

    }



}



attachEvents();