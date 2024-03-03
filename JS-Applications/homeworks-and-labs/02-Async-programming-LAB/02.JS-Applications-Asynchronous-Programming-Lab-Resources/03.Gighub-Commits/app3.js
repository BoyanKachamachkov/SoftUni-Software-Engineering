const list = document.getElementById('commits');

async function loadCommits() {
  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;
  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw 'Error';
    }

    const data = await response.json();

    list.replaceChildren(...data.map(createLiElement));

  } catch (error) {
    const newLi = document.createElement('li');
    newLi.textContent = error;
    list.replaceChildren(newLi);
  }

}
function createLiElement({ commit }) {
  const li = document.createElement('li');
  li.textContent = `${commit.author.name}: ${commit.message}`;

  return li;
}