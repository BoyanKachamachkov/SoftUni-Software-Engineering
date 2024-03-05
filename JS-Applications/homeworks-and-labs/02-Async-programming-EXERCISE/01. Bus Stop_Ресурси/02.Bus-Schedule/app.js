function solve() {
    function depart() {
        let nextStopId = 'depot';
        let stopInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(body => body.json())
            .then(stopInfo => {

                stopInfoSpan.setAttribute('data-next-stop-name', stopInfo.name);
                stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);

                stopInfo.textContent = stopInfo.name;
                departButton.disabled = true;
                arriveButton.disabled = false;


            });
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();