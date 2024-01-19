function subtract() {
	const firstNumEl = document.getElementById('firstNumber').value;
	const secNumEl = document.getElementById('secondNumber').value;
	const result = document.getElementById('result');

	const output = Number(firstNumEl) - Number(secNumEl);
	result.textContent = output;
}
