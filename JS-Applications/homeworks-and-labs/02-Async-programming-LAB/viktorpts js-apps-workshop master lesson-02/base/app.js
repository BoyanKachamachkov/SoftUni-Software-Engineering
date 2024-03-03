// window.addEventListener('load');

async function getRecipes() {
  const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

  try {
    const response = await fetch(url);
    const recipes = await response.json();
    console.log(recipes);

    return recipes;
  } catch (err) {
    throw err;
  }

}

async function getDetails(id) {

  const url = `http://localhost:3030/jsonstore/cookbook/details/:id`;
}