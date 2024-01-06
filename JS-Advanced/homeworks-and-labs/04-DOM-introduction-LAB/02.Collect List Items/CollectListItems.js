/*
Write a JS function that scans a given HTML list and appends all collected list items’ text to a textarea on the same page when the user clicks on a button.
*/
function extractText() {
	// get items text
	const items = document.getElementById('items');
	console.log(items);

	const listEls = Array.from(items.children);
	console.log(listEls);

	const output = listEls.map((li) => li.textContent).join('\n');
	console.log(output);

	let resultTextArea = document.getElementById('result');
	resultTextArea.value = output;
}
