const nameInput = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorMsgs = document.getElementById('errors')



form.addEventListener('submit', (e) => {

    let errorMessages = []

    if (nameInput.value === '' || nameInput.value === null) {
        errorMessages.push('You need to type a name!')
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        errorMsgs.innerText = errorMessages.join(', ')


    }
})
