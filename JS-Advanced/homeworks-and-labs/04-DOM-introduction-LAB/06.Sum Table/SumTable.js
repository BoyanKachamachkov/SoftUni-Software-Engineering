function sumTable() {
	let costElements = Array.from(document.querySelectorAll('td:nth-child(2)'));

	let sumElement = costElements.pop();

	let sum = costElements.reduce((a, x) => a + Number(x.textContent), 0);

	sumElement.textContent = sum;
}
