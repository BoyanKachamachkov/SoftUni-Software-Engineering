let loadBtn = document.getElementById('load-character').addEventListener('click', loadCharacter);


function loadCharacter() {
  let baseUrl = 'https://swapi.dev/api/';

  fetch(`${baseUrl}/people/1`)
    .then(res => res.json()) // първия ден ни е за отговора
    .then((char) => { // втория е за данните
      console.log(char);
    })
    .catch(error => { //кеча ще ни работи и с 2-та дена, където фейлне


    });
}

function oldLoadCharacter() {
  let baseUrl = 'https://swapi.dev/api/';
  let promise = fetch(`${baseUrl}/people/1`);

  promise.then(function (res) {
    console.log(res);
  });
}