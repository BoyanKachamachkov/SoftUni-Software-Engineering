function sameNums(num) {

	let isSame = true;
	let sum = 0;
	let numStr = num.toString();
	for (let i = 0; i < numStr.length; i++) {
		if (numStr[i] != numStr[0]) {
			isSame = false;
		}
		sum += Number(numStr[i]);
	}
	console.log(isSame);
	console.log(sum)
}
sameNums(2222222);
sameNums(1234);
