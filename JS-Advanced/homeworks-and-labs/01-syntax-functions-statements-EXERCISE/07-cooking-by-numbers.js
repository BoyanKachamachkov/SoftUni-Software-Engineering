function cooking(num, op1, op2, op3, op4, op5) {
	let myNum = Number(num);
	let arrOp = [];
	arrOp.push(op1, op2, op3, op4, op5);
	console.log(arrOp);

	for (let i = 0; i < arrOp.length; i++) {
		let command = arrOp[i];

		switch (command) {
			case 'chop':
				myNum /= 2;
				break;

			case 'dice':
				myNum = Math.sqrt(myNum);
				break;

			case 'spice':
				myNum += 1;
				break;

			case 'bake':
				myNum *= 3;
				break;

			case 'fillet':
				myNum *= 0.8;
				break;
		}
		console.log(myNum);
	}
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
