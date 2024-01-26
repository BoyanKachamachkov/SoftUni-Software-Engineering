function addItem() {
	const inputVal = document.getElementById('newItemText').value;
	const ulEl = document.getElementById('items');

	// create new li el
	let liEl = document.createElement('li');
	liEl.textContent = inputVal;

	// create new a el
	let removeEl = document.createElement('a');
	removeEl.href = '#';
	let removeElText = document.createTextNode('[Delete]');
	removeEl.appendChild(removeElText);
	removeEl.addEventListener('click', deleteItem);

	function deleteItem() {
		liEl.remove();
	}

	// append to UL

	liEl.appendChild(removeEl);
	ulEl.appendChild(liEl);

	// clear input
	document.getElementById('newItemText').value = '';
}
 