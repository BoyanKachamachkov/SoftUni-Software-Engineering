document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/users/register';
function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');


    if (!email || !password || !rePass || password !== rePass) {
        return; //TODO load err msg
    }

    createUser({ email, password });
}

async function createUser(data) {
    const option = createOption('POST', data);
    let response = await fetch(url, option);
    let userData = await response.json()
    debugger;

}

function createOption(method, data) {
    return {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}