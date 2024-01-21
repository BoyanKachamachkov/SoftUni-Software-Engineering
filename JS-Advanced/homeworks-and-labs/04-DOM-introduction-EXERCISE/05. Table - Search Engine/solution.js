function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	function onClick() {
		//   TODO:
		// check all cells for input string
		// if match(full words or single letters) check lower, lower
		// 		- if any row contains it -> add class select to row
		// 		- if NO match -> nothing happens
		// after every search
		//		- clear input field
		//

		const inputFieldEl = document
			.getElementById('searchField')
			.value.toLowerCase();
		const rows = document.querySelectorAll('tbody tr');

		for (let row of rows) {
			const rowTextToLower = row.textContent.toLowerCase();

			if (rowTextToLower.includes(inputFieldEl)) {
				row.setAttribute('class', 'select');
			} else {
				row.removeAttribute('class');
			}
		}
	}
}
