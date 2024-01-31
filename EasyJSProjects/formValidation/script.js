const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    })


if (messages.length > 0) {
    e.preventDefault()
}
})