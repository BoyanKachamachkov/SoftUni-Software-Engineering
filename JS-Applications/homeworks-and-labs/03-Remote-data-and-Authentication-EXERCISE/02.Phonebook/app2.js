function attachEvents() {

    /* When the [Load] button is clicked, a GET request should be made to the server to get all phonebook entries. Each  received entry should be in a li inside the ul with id="phonebook" in the following format with text "<person>: <phone> " and a [Delete] button attached.  */
    // select load btn
    // get for all entries
    // attach each entry inside the ul as li
    // format "<person>: <phone> "
    // attach delete button to each entry

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const ulRef = document.getElementById('phonebook');

    document.getElementById('btnLoad').addEventListener('click', onLoad);

    async function onLoad() {

        const response = await fetch(url);
        const data = await response.json();

        // clear
        ulRef.innerHTML = '';

        Object.values(data).forEach(rec => {
            createAndAppendLi(rec);
        });


    }

    function createAndAppendLi(rec) {
        let li = document.createElement('li');
        li.textContent = `${rec.person}: ${rec.phone}`;

        let btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.dataset.id = rec._id;
        btn.addEventListener('click', onDeleteClick);

        li.appendChild(btn);
        ulRef.appendChild(li);
    }


    async function onDeleteClick(e) {
        // delete to http://localhost:3030/jsonstore/phonebook/:key> 
        let id = e.target.dataset.id;

        await fetch(url + '/' + id, {
            method: 'DELETE'
        });

        onLoad();

    }
}

attachEvents();