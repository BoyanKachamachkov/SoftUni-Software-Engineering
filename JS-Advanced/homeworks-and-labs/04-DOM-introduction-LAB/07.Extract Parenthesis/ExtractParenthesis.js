function extract(content) {
	const pattern = /\(([^)]+)\)/g;
	const contentEl = document.getElementById('content').textContent;
	let output = [];

	let match = pattern.exec(contentEl);

	while (match != null) {
		output.push(match[1]);
		match = pattern.exec(contentEl);
	}

	return output.join('; ');
}
