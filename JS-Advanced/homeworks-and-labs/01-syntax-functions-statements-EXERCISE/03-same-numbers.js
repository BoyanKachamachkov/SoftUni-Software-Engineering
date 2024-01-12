function sameNums(num) {
	const numString = num.toString();

	let firstChar = numString[0];
	let sum = Number(numString[0]);

	let areSame = true;
	for (let i = 1; i < numString.length; i++) {
		if (firstChar == numString[i]) {
			sum += Number(numString[i]);
		} else {
			sum += Number(numString[i]);
			areSame = false;
		}
	}
	console.log(areSame);
	console.log(sum);
}
sameNums(2222222);
sameNums(1234);
