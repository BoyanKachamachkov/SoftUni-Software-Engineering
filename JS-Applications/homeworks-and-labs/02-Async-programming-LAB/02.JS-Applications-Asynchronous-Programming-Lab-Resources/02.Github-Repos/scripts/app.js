function loadRepos() {
	const list = get.getElementById('repos');

	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(onHeaders)
		.then(onSuccess)
		.catch(onError);


}

function onHeaders(response) {
	if (!response.ok) {
		throw 'Error!';
	}
	return response.json();
}

function onSuccess(data) {

}

function onError(error) {

}