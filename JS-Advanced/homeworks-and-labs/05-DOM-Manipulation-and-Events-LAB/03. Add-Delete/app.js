function addItem() {
	const input = document.querySelector('#newItemText').value;
	const items = document.querySelector('#items');

	const newLi = document.createElement('li');
	newLi.textContent = input;

	let remove = document.createElement('a');
	let linkText = document.createTextNode('[Delete]');

	remove.appendChild(linkText);
	remove.href = '#';
	remove.addEventListener('click', deleteItem);

	newLi.appendChild(remove);
	items.appendChild(newLi);

	function deleteItem() {
		newLi.remove();
	}
}
