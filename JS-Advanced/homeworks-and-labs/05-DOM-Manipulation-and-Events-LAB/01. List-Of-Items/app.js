function addItem() {
	// 1. Select input and read it
	// 2. create li element
	// 3. select the exsisting ul ID
	// 4. append newly created element to the UL as a child

	const input = document.querySelector('#newItemText').value;
	const newLiElement = document.createElement('li');
	newLiElement.textContent = input;

	const ulEl = document.querySelector('#items');
	ulEl.appendChild(newLiElement);

    // ! clear input in the end
	document.querySelector('#newItemText').value = ''
}
