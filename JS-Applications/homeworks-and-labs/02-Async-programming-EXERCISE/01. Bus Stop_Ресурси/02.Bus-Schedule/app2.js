function solve() {
    // when stopped -> only btn Depar is enabled + info box shows curr stop
    // when moving -> only btn arrive is enabled + info box shows upcoming stop
    // initial state - info box (not connected) + arrive disabled, first ID is depot

    // make get on DEPART click to http://localhost:3030/jsonstore/bus/schedule/:id 
    // Next stop {stopName}
    // Arriving at {stopName}
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const infoRef = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const stop = {
        currentStop: '',
        next: 'depot'
    }

    async function depart() {

        try {
            const response = await fetch(baseURL + );
            const data = await response.json();
            infoRef.textContent = `Next stop ${data.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
            debugger
        } catch (error) {

        }
    }

    function arrive() {

        infoRef.textContent = `Arriving at ${data.name}`
     }

    return {
        depart,
        arrive
    };

}

let result = solve();