function attachEvents() {
    /* 
If you click over [Refresh] button you should get all messages with GET request and display them into the textarea. Use the following message format:
"{author}: {message}"
 */

    const url = ' http://localhost:3030/jsonstore/messenger';
    document.getElementById('submit').addEventListener('click', onSend);


    async function onSend(e) {
        // select input refs
        // create vals from inputs
        // craete obj to send with POST
        // send obj
        // clear inputs

        const nameRef = document.querySelector("input[name='author']");
        const textRef = document.querySelector("input[name='content']");

        const name = nameRef.value;
        const text = textRef.value;

        const obj = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ author: name, content: text })
        };

        await fetch(url, obj);
        nameRef.value = '';
        textRef.value = '';

    }

}


attachEvents();