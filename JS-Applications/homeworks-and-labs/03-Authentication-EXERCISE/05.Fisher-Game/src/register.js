document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/users/register';
async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');


    if (!email || !password || !rePass || password !== rePass) {
        return; //TODO load err msg
    }

    await createUser({ email, password });
    // clear form
    e.target.reset();

    window.location = 'index.html';
}

async function createUser(data) {
    const option = createOption('POST', data);
    let response = await fetch(url, option);
    let userData = await response.json();

    // save
    sessionStorage.setItem('userData', JSON.stringify(userData));
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