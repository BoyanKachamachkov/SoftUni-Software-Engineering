function solve() {
	let text = document.getElementById('text').value;
	let convention = document.getElementById('naming-convention').value;

	let result = '';

	switch (convention) {
		case 'Camel Case':
			text = text.toLowerCase().split(' ');
			result += text.shift();

			text.forEach((e) => {
				result += e[0].toUpperCase() + e.substring(1);
			});
			break;

		case 'Pascal Case':
			text = text.toLowerCase().split(' ');
			text.forEach((e) => {
				result += e[0].toUpperCase() + e.substring(1);
			});
			break;

		default:
			result = 'Error!';
			break;
	}

	document.getElementById('result').textContent = result;
}
