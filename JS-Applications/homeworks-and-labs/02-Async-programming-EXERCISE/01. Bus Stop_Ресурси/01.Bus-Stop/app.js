function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(res => res.json())
        .then(stopInfo => {
            stopName.textContent = stopInfo.name;

            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
            Object.keys(stopInfo.buses).forEach(bus => {

                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${stopInfo.buses[bus]} minutes`;
                busesUl.appendChild(li);
            });
        })
        .catch(err => {

            stopName.textContent = 'Error';
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
            throw new Error('Error');
        });

}