function attachEvents() {

    // http://localhost:3030/jsonstore/forecaster/locations
    /* 
    { 
    name: locationName,
    code: locationCode
}
 */
    const inputLocationRef = document.getElementById('location');
    const baseURL = 'http://localhost:3030/jsonstore/forecaster/locations';

    const getWBtn = document.getElementById('submit');
    getWBtn.addEventListener('click', getWeather);

    async function getWeather() {
        const userInput = inputLocationRef.value;
        const response = await fetch(baseURL);
        const data = await response.json();

        // Find the object, corresponding to the name that the user submitted in the input field with ID "location" and use its code value to make two more GET requests:
        
        debugger;
    }



}



attachEvents();