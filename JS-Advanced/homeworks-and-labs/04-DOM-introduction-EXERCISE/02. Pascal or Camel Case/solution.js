function solve() {
	// select first param
	let text = document.getElementById('text').value;
	console.log(text);

	// select second param
	let changer = document.getElementById('naming-convention').value;
	console.log(changer);

	let output = '';
  text = text.toLowerCase();
	console.log(text);

	if (changer == 'Pascal Case') {



	} else if (changer == 'Camel Case') {



	} else {
		output = 'Error!';
	}
}
