async function getInfo() {
    const id = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${id} `;


    try {
        const response = await fetch(url);
        const data = await response.json();
        debugger;

        data.buses.forEach((bus) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${bus[bus]} minutes`;
            stopName.append(li);
            stopName.textContent = data.name;

        });


    } catch (error) {

        throw error;
    }


}