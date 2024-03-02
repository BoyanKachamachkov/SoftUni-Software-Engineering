const list = document.getElementById('repos');
function loadRepos() {

  const user = document.getElementById('username').value;
  const url = `https://api.github.com/users/${user}/repos`;

  fetch(url)
    .then(onLoad)
    .then(showRepos)
    .catch(onError);
}

function showRepos(data) {

  list.replaceChildren(...data.map(createLi));

}

function onLoad(res) {
  if (!res.ok) {
    throw 'Error';
  }
  return res.json();
}

function onError(err) {
  list.textContent = err;
}

function createLi({ full_name, html_url }) {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = html_url;
  anchor.textContent = full_name;
  li.appendChild(anchor);

  return li;
}