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
    };

    async function depart() {

        try {
            const response = await fetch(baseURL + stop.next);
            const data = await response.json();

            stop.currentStop = data.name;
            stop.next = data.next;
            infoRef.textContent = `Next stop ${stop.currentStop}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            infoRef.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoRef.textContent = `Arriving at ${stop.currentStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();