function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook'
    const ulRef = document.getElementById('phonebook')
    document.getElementById('btnLoad').addEventListener('click', onLoadRecords)

    async function onLoadRecords(e) {
        let response = await fetch(URL)
        let data = await response.json()

        Object.values(data).forEach(rec => {
            createAndAppendLi(rec)
        })
    }

    function createAndAppendLi(data) {
        let li = document.createElement('li')
        li.textContent = `${data.person}: ${data.phone}`

        ulRef.appendChild(li)
    }
}

attachEvents();