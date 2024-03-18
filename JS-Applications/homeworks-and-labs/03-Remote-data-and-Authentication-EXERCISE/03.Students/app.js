// 1. add event on window load
// 2. fetch all studs from server
// 3. update html with received data
// 4. on submit get value from inputs
// 5. use the data and create POST req
// 6. update student list
window.addEventListener('load', loadStudents);
const url = 'http://localhost:3030/jsonstore/collections/students';
const form = document.getElementById('form');
form.addEventListener('submit', addStudent);
const table = document.querySelector('#results tbody');

async function loadStudents() { }



async function addStudent(e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.get(firstName);
    debugger;
}


