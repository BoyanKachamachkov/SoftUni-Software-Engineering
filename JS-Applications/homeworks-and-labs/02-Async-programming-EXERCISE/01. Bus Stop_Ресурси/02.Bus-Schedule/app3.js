function solve() {
    // when stopped -> only btn Depar is enabled + info box shows curr stop
    // when moving -> only btn arrive is enabled + info box shows upcoming stop
    // initial state - info box (not connected) + arrive disabled, first ID is depot
    // make get on DEPART click to http://localhost:3030/jsonstore/bus/schedule/:id 
    // Next stop {stopName}
    // Arriving at {stopName}

    const infoRefSpan = document.querySelector('#info span');
    const depBtn = document.getElementById('depart');
    const arrBtn = document.getElementById('arrive');
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';

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

            infoRefSpan.textContent = `Next stop ${stop.currentStop}`;

            arrBtn.disabled = false;
            depBtn.disabled = true;

        } catch (error) {
            infoRefSpan.textContent = 'Error';
            depBtn.disabled = true;
            arrBtn.disabled = true;
        }

    }
    function arrive() {

        infoRefSpan.textContent = `Arriving at ${stop.currentStop}`;
        arrBtn.disabled = true;
        depBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };

}



let result = solve();