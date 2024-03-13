document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/users/login';

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return; //todo load err msg
    }
    await loginUser({ email, password });

    e.target.reset();
    window.location = 'index.html'

}

async function loginUser(data) {
    const option = createOption('POST', data);

    const response = await fetch(url, option);
    const userData = await response.json();
    sessionStorage.setItem('userData', JSON.stringify(userData));
    debugger
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