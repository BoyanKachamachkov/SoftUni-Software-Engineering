function loadRepos() {
	// take username input
	const userInput = document.getElementById('username').value;
	const baseUrl = 'https://api.github.com/users/';
	const ulEl = document.getElementById('repos');

	// fetch all github repos for user
	fetch(`${baseUrl}${userInput}/repos`)
		.then(res => res.json())
		.then((arr) => arr.forEach((repo) => {
			let newLi = document.createElement('li');
			let newA = document.createElement('a');
			newA.href = repo.html_url;
			newA.textContent = full_name;

			console.log(newA);

			console.log(repo.full_name);
			console.log(repo.html_url);
		}));

	// each repository will be separate LI item
	// utilize full_name and html_url from the returned object

}