function search() {
	/* 
	1.	Target the input field with a variable

	2.	Extract all list elements's text
			queryAll + li
			transfer to arr

	3.		Iterate through all items
			-transfer to TEXT CONTENT of the item
			-use counter 
			includes searched text?
				true?
				-underline (style.fontWeight) + style.textDecoration

				false?
				-reset styles to prepare for new search

	4. Set new value of the result 

	*/

	let searchFieldText = document.getElementById('searchText').value;
	let items = Array.from(document.querySelectorAll('#towns li'));
	let counter = 0;

	items.forEach((item) => {
		if (item.textContent.includes(searchFieldText)) {
			item.style.fontWeight = 'bold';
			item.style.textDecoration = 'underline';
			return counter++;
		}
		item.style.fontWeight = '';
		item.style.textDecoration = 'none';
	});
	document.getElementById('result').textContent = `${counter} matches found`;
}
