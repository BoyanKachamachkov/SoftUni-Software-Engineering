async function getInfo() {
    // take value from stopid
    // get to  http://localhost:3030/jsonstore/bus/businfo/:busId
    // place name inside div stopname
    //      list each item as "Bus {busId} arrives in {time} minutes"
    // display Error as stopName 
    // clear list before each req
    // Note: The service will respond with valid data to IDs 1287, 1308, 1327 and 2334.

    const stopIdRef = document.getElementById('stopId');
    const stopId = stopIdRef.value;
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopNameRef = document.getElementById('stopName');
    const ulRef = document.getElementById('buses')

    try {
        const response = await fetch(baseURL + stopId);
        const data = await response.json();
        stopNameRef.textContent = data.name;

        console.log(data)



    } catch (error) {

    }



    debugger;
}