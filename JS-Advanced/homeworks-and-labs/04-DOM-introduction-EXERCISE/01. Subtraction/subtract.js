function subtract() {
	const num1 = document.getElementById('firstNumber').value;
	const num2 = document.getElementById('secondNumber').value;

	const sum = Number(num1) - Number(num2);

	const output = document.getElementById('result');
	output.textContent = sum;
}
