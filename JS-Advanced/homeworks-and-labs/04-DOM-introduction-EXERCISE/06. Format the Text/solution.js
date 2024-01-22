function solve() {
	// 1. select element
	let textAreaElement = document.getElementById('input');

	// 2. extract text from text area
	let text = textAreaElement.value;

	// 3. split text by . to get sentences count and add '.' to the end because we need it in the output
	let sentencesCount = text.split('.').map((x) => x + '.');

	// 4. group sentences by 3 paragraphs
	let paragraphSentences = [];

  

	// 5. insert paragraphs into DOM
}
