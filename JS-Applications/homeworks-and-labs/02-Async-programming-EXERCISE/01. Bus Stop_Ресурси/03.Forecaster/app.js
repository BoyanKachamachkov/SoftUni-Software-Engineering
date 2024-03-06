function attachEvents() {
    let getWeatherButton = document.getElementById('submit');

    getWeatherButton.addEventListener('click', getWeatherHandler);
    let locationInput = document.getElementById('location');


    function getWeatherHandler() {
        let locationName = locationInput.value;

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        .then(body => body.json())
        .then

    }
}

attachEvents();