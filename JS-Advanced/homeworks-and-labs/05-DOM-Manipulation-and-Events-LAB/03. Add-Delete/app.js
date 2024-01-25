function addItem() {
	//TODO...

	// slect input

	const input = document.querySelector('#newItemText').value;
	console.log(input);
	const items = document.querySelector('#items');

	const newLi = document.createElement('li');
	newLi.textContent = input;
	items.appendChild(newLi);

}
