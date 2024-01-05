/*
Write a JS function that scans a given HTML list and appends all collected list items’ text to a textarea on the same page when the user clicks on a button.
*/
function extractText() {
	let list = document.getElementById('items');
	console.log(list); // returns ul element

	let items = list.children;
	console.log(items); // returns HTML coll. of LIs

	items = Array.from(items);
	console.log(items); // ret. 3 LI els.

	const output = items.map((li) => li.textContent).join('\n');
	console.log(output); //ret. text from each item on new line

	const result = document.getElementById('result');
	console.log(result); //ret. res. fied
	result.value = output; //set res. field text
}
