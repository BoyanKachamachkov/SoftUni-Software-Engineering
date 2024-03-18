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

async function loadStudents() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Can't fetch data");
        }

        const data = await response.json();

        Object.values(data).forEach(r => {
            // Implement generator function
            let student = createElement('tr',
            createElement('td', r.firstName),
            createElement('td', r.lastName),
            createElement('td', r.facultyNumber),
            createElement('td', r.grade),
            )
            table.appendChild(student)
        });
    } catch (error) {
        alert(error.message)
    }
}
// 'li' 'hello' => li tag + textNode.textContent = hello, li.appendChild(textNode)
// 'ul', HTML ELEMENT li tag  => ul tag => ul.appendChild(HTML ELEMENT)
function createElement(type, ...content){
    let element = document.createElement(type)

    content.forEach( c=>{
        if(typeof c === 'number' || typeof c == 'string'){
            c = document.createTextNode(c)
        }
        element.appendChild(c)
    })

    return element;
}



async function addStudent(e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.get(firstName);
    debugger;
}


