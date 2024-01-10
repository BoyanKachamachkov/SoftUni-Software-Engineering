function words(string) {
	let pattern = /(?<words>\w+)/g;
	let output = '';

	let match = pattern.exec(string);
	while (match) {
		let word = match[0].toUpperCase();
		output += `${word}, `;
		match = pattern.exec(string);
	}
	console.log(output);
}

words('Hi, how are you?');
words('hello');
