async function getInfo() {
    // take value from stopid
    // get to  http://localhost:3030/jsonstore/bus/businfo/:busId
    // place name inside div stopname
    //      list each item as "Bus {busId} arrives in {time} minutes"
    // display Error as stopName 
    // clear list before each req
    // Note: The service will respond with valid data to IDs 1287, 1308, 1327 and 2334.

    const stopId = document.getElementById('stopId').value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopNameRef = document.getElementById('stopName');
    const ulBuses = document.getElementById('buses');

    try {
        const response = await fetch(url + stopId);
        const data = await response.json();

        Array.from(ulBuses.querySelectorAll('li')).forEach(li => li.remove());

        stopNameRef.textContent = data.name;
        Object.keys(data.buses).forEach(bus => {
            const newLi = document.createElement('li');
            newLi.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            ulBuses.appendChild(newLi);

        });

    } catch (error) {
        stopNameRef.textContent = 'Error';
        Array.from(ulBuses.querySelectorAll('li')).forEach(li => li.remove());
        throw new Error(error);

    }
}

