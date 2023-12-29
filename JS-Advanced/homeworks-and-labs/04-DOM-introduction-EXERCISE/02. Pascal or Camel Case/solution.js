function solve() {
	let input = document.getElementById('text').value;

	const convention = document.getElementById('naming-convention').value;

	let output = '';
	input = input.toLowerCase();

	switch (convention) {
		// "this is an example", "Camel Case"
		case 'Camel Case':
			input = input.split(' ');
			output += input.shift();
			input.forEach((e) => {
				output += e[0].toUpperCase() + e.substring(1);
			});
			break;
			debugger;

		case 'Pascal Case':
			input = input.split(' ');
			input.forEach((e) => {
				output += e[0].toUpperCase() + e.substring(1);
			});
			break;

		default:
			output = 'Error!';
			break;
	}
	document.getElementById('result').textContent = output;
}
