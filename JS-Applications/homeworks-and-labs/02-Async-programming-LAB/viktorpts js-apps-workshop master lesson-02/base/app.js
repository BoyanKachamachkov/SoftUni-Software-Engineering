window.addEventListener('load', start);

async function start() {
  const main = document.querySelector('main');

  const recipes = await getRecipes();

  main.replaceChildren(...Object.values(recipes).map(createCard));
}

function createCard({ name, img }) {

  const element = document.createElement('article');
  element.className = 'preview';
  element.innerHTML = `
    <div class="title">
    <h2>${name}</h2>
    </div>
    <div class="small">
      <img src="${img}">
    </div>`;

  return element;

}

async function getRecipes() {
  const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

  try {
    const response = await fetch(url);
    const recipes = await response.json();
    console.log(recipes);

    return recipes;
  } catch (err) {
    alert(err);
    throw err;
  }

}

async function getDetails(id) {

  const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
  try {
    const response = await fetch(url);
    const details = await response.json();

    return details;
  } catch (err) {
    alert(err);
    throw err;
  }
}