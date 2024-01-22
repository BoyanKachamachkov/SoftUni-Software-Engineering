function solve() {
	// 1. select element
	let textAreaElement = document.getElementById('input');

	// 2. extract text from text area
	let text = textAreaElement.value;

	// 3. split text by . to get sentences count and add '.' to the end because we need it in the output
	let sentencesCount = text
		.split('.')
		.filter((x) => x !== '')
		.map((x) => x + '.');

	// 4. group sentences by 3 paragraphs
	let paragraphRoof = Math.ceil(sentencesCount.length / 3);

	for (let index = 0; index < paragraphRoof; index++) {}

	// 5. insert paragraphs into DOM
	let resultDiv = document.getElementById('output');
	for (let index = 0; index < paragraphRoof; index++) {
		resultDiv.innerHTML += `<p>${sentencesCount.splice(0, 3).join('')}</p>`;
	}
}
