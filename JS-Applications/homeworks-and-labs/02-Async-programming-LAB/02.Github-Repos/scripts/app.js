function loadRepos() {
	// take username input
	const userInput = document.getElementById('username').value;
	const baseUrl = 'https://api.github.com/users/';

	// fetch all github repos for user
	fetch(`${baseUrl}${userInput}/repos`)
		.then(res => res.json())
		.then((arr) => arr.forEach((arr) => {
			console.log(arr.full_name);
			console.log(arr.html_url);
		}));

	// each repository will be separate LI item
	// utilize full_name and html_url from the returned object

}