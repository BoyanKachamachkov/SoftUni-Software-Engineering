function solve(steps, footprint, speed) {

	let distance = steps * footprint;
	let speedMetersSec = speed / 3.6;
	let timeSec = distance / speedMetersSec;
	let breaksSecs = Math.floor(distance / 500) * 60;
	let totalTimeSec = timeSec + breaksSecs;

	let hr = Math.floor(totalTimeSec / 3600);
	let min = Math.floor(totalTimeSec / 60);
	let sec = Math.round(totalTimeSec % 60);

	console.log(`${hr < 10 ? '0' : ''}${hr}:${min < 10 ? '0' : ''}${min}:${sec}`);
}


solve(4000, 0.60, 5); //00:32:48;