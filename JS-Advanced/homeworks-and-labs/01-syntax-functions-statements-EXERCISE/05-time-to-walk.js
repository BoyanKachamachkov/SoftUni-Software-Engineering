function timeToWalk(steps, footprint, speed) {
	let distanceInMeters = steps * footprint;
	let speedInMetersPerSec = speed / 3.6;
	let restSeconds = Math.floor(distanceInMeters / 500) * 60;
	let timeInSeconds = distanceInMeters / speedInMetersPerSec + restSeconds;

	let timeHr = Math.floor(timeInSeconds / 3600);
	let timeMin = Math.floor(timeInSeconds / 60);
	let timeSec = Math.round(timeInSeconds % 60);

	console.log(
		`${timeHr < 10 ? '0' : ''}${timeHr}:${
			timeMin < 10 ? '0' : ''
		}${timeMin}:${timeSec}`
	);
}
timeToWalk(4000, 0.6, 5); //00:32:48
timeToWalk(2564, 0.7, 5.5);
