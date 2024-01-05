function search() {
	let searchElement = document.getElementById('searchText');

	let allLiElements = Array.from(document.querySelectorAll('#towns li'));

	let searchText = searchElement.value;

	allLiElements.forEach((el) => (el.style['font-weight'] = 'normal'));
}



