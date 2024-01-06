/* 
Input	Output
"this is an example", "Camel Case"	thisIsAnExample
"secOND eXamPLE", "Pascal Case"	SecondExample
"Invalid Input", "Another Case"	Error!

*/

function solve() {
	let textField = document.getElementById('text').value;
	const namingConventionField =
		document.getElementById('naming-convention').value;
	const resultEl = document.getElementById('result');
	textField = textField.toLowerCase();

	let output = '';

	switch (namingConventionField) {
		case 'Camel Case':
			textField = textField.split(' ');
			output += textField.shift();
			textField.forEach((e) => (output += e[0].toUpperCase() + e.substring(1)));

			break;

		case 'Pascal Case':
			textField = textField.split(' ');
			textField.forEach((e) => (output += e[0].toUpperCase() + e.substring(1)));

			break;

		default:
			output = 'Error!';
			break;
	}

	resultEl.textContent = output;
}
