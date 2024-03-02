const commits = document.getElementById('commits');

function loadCommits() {

  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo');

  const url = `https://api.github.com/repos/${username}/${repo}/commits`;

  fetch(url)
    .then(convertResponse)
    .then(showCommits)
    .catch(showError);

}
function convertResponse(res) { }
function showCommits(data) { }
function showError(err){}