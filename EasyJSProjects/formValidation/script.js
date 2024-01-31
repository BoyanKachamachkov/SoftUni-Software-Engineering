const nameInput = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorMsgs = document.getElementById('errors')



form.addEventListener('submit', (e) => {

    let errorMessages = []

    if (nameInput.value === '' || nameInput.value === null) {
        errorMessages.push('Name is required!')
    }


    if (password.value.length <= 6) {
        errorMessages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        errorMessages.push('Password must be less than 20 characters')
    }

    if (password.value == 'password') {
        errorMessages.push('Sorry, you cannot set your password to be "password". Please choose another one.')
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorMsgs.innerText = errorMessages.join(', ')


    }
})
