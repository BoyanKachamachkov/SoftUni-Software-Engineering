function search() {
	let searchInput = document.querySelector('#searchText').value;
	const liEls = Array.from(document.querySelectorAll('li'));

	let matches = 0;
	for (const li of liEls) {
		if (li.textContent.includes(searchInput)) {
			matches++;
			li.style.textDecoration = 'underline';
			li.style.fontWeight = 'bold';
		}
	}

	const resultEl = document.getElementById('result');
	let output = `${matches} matches found`;
	resultEl.textContent = output;
}
