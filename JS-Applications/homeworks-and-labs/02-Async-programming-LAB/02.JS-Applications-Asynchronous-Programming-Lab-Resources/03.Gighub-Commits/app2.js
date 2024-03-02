const commits = document.getElementById('commits');

function loadCommits() {

  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;

  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  fetch(url)
    .then(convertResponse)
    .then(showCommits)
    .catch(showError);

}
function convertResponse(res) {
  if (!res.ok) {
    throw 'Error';
  }
  return res.json();
}
function showCommits(data) {
  commits.replaceChildren(...data.map(createLi));
}
function showError(err) {
  const li = document.createElement('li');
  li.textContent = 'Error: 404 Not found';

  commits.replaceChildren(li);
}

// "<commit.author.name>: <commit.message>" 
function createLi({ commit }) {
  const li = document.createElement('li');
  li.textContent = `${commit.author.name}: ${commit.message}`;
  return li;
}