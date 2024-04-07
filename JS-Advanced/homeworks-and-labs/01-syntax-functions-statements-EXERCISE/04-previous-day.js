function solve(year, month, day) {
	let date = new Date(year, month - 1, day);

	date.setDate(date.getDate() - 1);

	let yy = date.getFullYear();
	let mm = date.getMonth() + 1;
	let dd = date.getDate();

	let output = `${yy}-${mm}-${dd}`;
	console.log(output);
}

solve(2015, 5, 10);