const list = document.getElementById('commits');
function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(onHeaders)
        .then(displayCommits)
        .catch(onError);
}


function onHeaders(response) {
    if (!response.ok) {
        throw 'Error';
    }
    return response.json();
}

function displayCommits(data) {

    console.log(data);
}

function onError(err) {
    console.error(err);
}