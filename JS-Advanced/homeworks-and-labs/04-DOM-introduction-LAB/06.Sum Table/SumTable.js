function sumTable() {
	const tdEls = Array.from(document.querySelectorAll('td:nth-child(2)'));

	tdEls.pop();
	const outputSum = tdEls.reduce((a, v) => a + Number(v.textContent), 0);
	const sumEl = document.getElementById('sum');
	sumEl.textContent = outputSum;
}
