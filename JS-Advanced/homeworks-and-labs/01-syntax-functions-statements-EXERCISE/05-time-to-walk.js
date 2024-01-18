function timeToWalk(stepsCount, footPrintMeters, speedKmh) {
	let distanceMeters = stepsCount * footPrintMeters;
	let speedMetersPerSec = speedKmh / 3.6;
	let restSeconds = Math.floor(distanceMeters / 500) * 60;
	let timeInSeconds = distanceMeters / speedMetersPerSec + restSeconds;

	let timeHr = Math.floor(timeInSeconds / 3600);
	let timeMin = Math.floor(timeInSeconds / 60);
	let timeSec = Math.round(timeInSeconds % 60);

	console.log(
		`${timeHr < 10 ? '0' : ''}${timeHr}:${
			timeMin < 10 ? '0' : ''
		}${timeMin}:${timeSec}`
	);
}

timeToWalk(4000, 0.6, 5);
