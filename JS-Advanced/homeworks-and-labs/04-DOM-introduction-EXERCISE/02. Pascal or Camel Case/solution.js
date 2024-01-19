/* 
Input	Output
"this is an example", "Camel Case"	thisIsAnExample
"secOND eXamPLE", "Pascal Case"	SecondExample
"Invalid Input", "Another Case"	Error!

*/

function solve() {
	let textInputEl = document.querySelector('#text').value;
	const namingConvEl = document.querySelector('#naming-convention').value;

	const result = document.querySelector('#result');

	let output = '';

	switch (namingConvEl) {
		case 'Camel Case':
			textInputEl = textInputEl.toLowerCase().split(' ');
			output += textInputEl.shift();

			textInputEl.forEach((el) => {
				output += el[0].toUpperCase() + el.substring(1);
			});

			break;

		case 'Pascal Case':
			textInputEl = textInputEl.toLowerCase().split(' ');

			textInputEl.forEach((el) => {
				output += el[0].toUpperCase() + el.substring(1);
			});
			break;

		default:
			output = 'Error!';
			break;
	}

	result.textContent = output;git s
}
