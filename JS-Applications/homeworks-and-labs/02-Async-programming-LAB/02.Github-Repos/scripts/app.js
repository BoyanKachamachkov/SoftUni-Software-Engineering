function loadRepos() {
	// take username input
	const userInput = document.getElementById('username').value;

	const baseUrl = 'https://api.github.com/users/';

	fetch(`${baseUrl}${userInput}/repos`)
		.then(res => res.json())
		.then(x => {
			console.log(x);
		});

	// fetch all github repos for user
	// each repository will be separate LI item
	// utilize full_name and html_url from the returned object

}