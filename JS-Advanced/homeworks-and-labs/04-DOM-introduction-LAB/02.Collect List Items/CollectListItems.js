function extractText() {
	// TODO

	// 1. find all elements
	// 2. extract their information
	// 3. put the string inside the input

	const els = document.getElementById('items');
	// console.log(els); //returns ITEMS

	const items = document.getElementById('items').children; //returns HTML collections with the childs

	// console.log(items);

	const itemArray = Array.from(items);
	const result = itemArray.map((li) => li.textContent).join('\n');

	document.getElementById('result').value = result;
}
