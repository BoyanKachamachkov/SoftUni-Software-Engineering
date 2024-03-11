function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook'
    const ulRef = document.getElementById('phonebook')
    document.getElementById('btnLoad').addEventListener('click', onLoadAllRecords)

    async function onLoadAllRecords(e) {
        let response = await fetch(URL)
        let data = await response.json()
        ulRef.innerHTML = ''

        Object.values(data).forEach(rec => {
            createAndAppendLi(rec)
        })
    }

    function createAndAppendLi(data) {
        let li = document.createElement('li')
        li.textContent = `${data.person}: ${data.phone}`

        let btn = document.createElement('button')
        btn.textContent = 'Delete'
        btn.dataset.id = data._id
        btn.addEventListener('click', onDelete)

        li.appendChild(btn)
        ulRef.appendChild(li)
    }

    async function onDelete(e) {
        let id = e.target.dataset.id

        await fetch(URL + '/' + id, {
            method: 'DELETE'

        })
        onLoadAllRecords()

    }
}

attachEvents();