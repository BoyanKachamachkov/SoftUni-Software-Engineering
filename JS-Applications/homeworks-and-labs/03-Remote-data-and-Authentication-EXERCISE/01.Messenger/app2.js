function attachEvents() {
    /* The url for the requests - http://localhost:3030/jsonstore/messenger
When [Send] button is clicked you should create a new object and send a post request to the given url. Use the following message structure:
{
  author: authorName,
  content: msgText,
}
If you click over [Refresh] button you should get all messages with GET request and display them into the textarea. Use the following message format:
"{author}: {message}"
 */

    const url = ' http://localhost:3030/jsonstore/messenger';
    document.getElementById('submit').addEventListener('click', onSend);


    async function onSend(e) {
        // create new obj

        const nameRef = document.querySelector("input[name='author']");
        const textRef = document.querySelector("input[name='content']");

        const name = nameRef.value


        debugger
    }

}


attachEvents();