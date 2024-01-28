// Write a function that calculates the area and the volume of a figure, which is defined by its coordinates
// (x, y, z).

function area() {
	return Math.abs(this.x * this.y);
}

function vol() {
	return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
	let coordinatesArr = JSON.parse(input);
	let resultArr = [];

	for (const coordinates of coordinatesArr) {
		resultObj = {
			area: area.call(coordinates),
			volume: vol.call(coordinates),
		};

		resultArr.push(resultObj);
	}

	return resultArr;
}

solve(
	area,
	vol,
	`[
		{"x":"10","y":"-22","z":"10"},
		{"x":"47","y":"7","z":"-5"},
		{"x":"55","y":"8","z":"0"},
		{"x":"100","y":"100","z":"100"},
		{"x":"55","y":"80","z":"250"}
		]`
);
