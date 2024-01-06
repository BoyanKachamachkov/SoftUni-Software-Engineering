function subtract() {
	const firstNumEl = document.getElementById('firstNumber').value;
	const secNumEl = document.getElementById('secondNumber').value;

	const resultEl = document.getElementById('result');

	const output = Number(firstNumEl) - Number(secNumEl);
	resultEl.textContent = output;
}
