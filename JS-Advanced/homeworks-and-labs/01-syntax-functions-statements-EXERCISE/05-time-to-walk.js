function timeToWalk(steps, footprint, speed) {
	let distanceInMeters = steps * footprint;
	let speedInMetersPerSec = speed / 3.6;
	let restSeconds = Math.floor(distanceInMeters / 500) * 60;

	
	console.log({ distanceInMeters });
	console.log({ speedInMetersPerSec });
	console.log({ restSeconds });
}
timeToWalk(4000, 0.6, 5); //00:32:48
