function solve() {
    // when stopped -> only btn Depar is enabled + info box shows curr stop
    // when moving -> only btn arrive is enabled + info box shows upcoming stop
    // initial state - info box (not connected) + arrive disabled, first ID is depot

    // make get on DEPART click to http://localhost:3030/jsonstore/bus/schedule/:id 
    // Next stop {stopName}
    // Arriving at {stopName}
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const infoRef = document.getElementById('info')

    async function depart() {

        try {
            const response = await fetch(baseURL + 'depot');
            const data = await response.json();
            infoRef.textContent = `Next stop ${data.name}`


            debugger;



        } catch (error) {

        }



    }

    function arrive() { }

    return {
        depart,
        arrive
    };

}

let result = solve();