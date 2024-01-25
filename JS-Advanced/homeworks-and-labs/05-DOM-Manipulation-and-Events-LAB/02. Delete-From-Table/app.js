function deleteByEmail() {
	// select and gather input info
	const input = document.getElementsByName('email')[0].value;
	const rows = document.querySelectorAll('#customers tr td:nth-child(2)');

	// loop over exsisting info to check for matches

	for (let row of rows) {
		console.log(row);

		if (row.textContent == input) {
			let rowElement = row.parentNode;
			rowElement.parentNode.removeChild(rowElement);
			document.getElementById('result').textContent = 'Deleted.';
			document.getElementsByName('email')[0].value = '';

			return;
		}
		document.getElementById('result').textContent = 'Not found.';
	}
	document.getElementsByName('email')[0].value = '';

	// if match is true ,  textContent of result -> "deleted"
	// if not found , textContent -> not found.
}
function deleteByEmail() {
	// select and gather input info
	const input = document.getElementsByName('email')[0].value;
	const rows = document.querySelectorAll('#customers tr td:nth-child(2)');

	// loop over exsisting info to check for matches

	for (let row of rows) {
		console.log(row);

		if (row.textContent == input) {
			let rowElement = row.parentNode;
			rowElement.parentNode.removeChild(rowElement);
			document.getElementById('result').textContent = 'Deleted.';
			document.getElementsByName('email')[0].value = '';

			return;
		}
		document.getElementById('result').textContent = 'Not found.';
	}
	document.getElementsByName('email')[0].value = '';

	// if match is true ,  textContent of result -> "deleted"
	// if not found , textContent -> not found.
}
