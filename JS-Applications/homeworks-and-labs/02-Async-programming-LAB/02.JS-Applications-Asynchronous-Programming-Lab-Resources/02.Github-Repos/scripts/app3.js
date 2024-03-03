const list = document.getElementById('repos');
async function loadRepos() {
  const username = document.getElementById('username').value;
  const repos = document.getElementById('repos');
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw 'Error';
    }
    const data = await response.json();
    list.replaceChildren(...data.map(createLiItem));
  } catch (error) {
    repos.textContent = error;
  }
}

function createLiItem({ html_url, full_name }) {

  const li = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = html_url;
  anchor.textContent = full_name;
  li.appendChild(anchor);

  return li;
}