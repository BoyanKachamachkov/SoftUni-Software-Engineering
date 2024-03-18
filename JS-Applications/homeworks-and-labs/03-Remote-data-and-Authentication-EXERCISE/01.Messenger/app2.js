function attachEvents() {
    const url = ' http://localhost:3030/jsonstore/messenger';
    document.getElementById('submit').addEventListener('click', onSend);
    document.getElementById('refresh').addEventListener('click', onRefresh);


    async function onSend() {
        // select input refs
        // create vals from inputs
        // craete obj to send with POST
        // send obj
        // clear inputs
        const nameRef = document.querySelector("input[name='author']");
        const textRef = document.querySelector("input[name='content']");
        const name = nameRef.value;
        const text = textRef.value;

        const postObject = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ author: name, content: text })
        };
        await fetch(url, postObject);
        nameRef.value = '';
        textRef.value = '';
    }


    async function onRefresh() {
        // select textarea
        // collect all msgs with GET
        // display in textarea
        // use format "{author}: {message}" (trim ends)
        const textAreaRef = document.getElementById('messages');

        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(message => {
            textAreaRef.value += `${message.author}: ${message.content}\n`;
        });
        textAreaRef.value = textAreaRef.value.trim();
    }
}
attachEvents();