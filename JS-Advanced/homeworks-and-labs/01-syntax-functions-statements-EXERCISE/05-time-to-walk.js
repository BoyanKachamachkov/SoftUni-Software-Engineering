function timeToWalk(stepsCount, footPrintMeters, speedKmh) {
	// every 500 meters , + 1 minute for break

	let output = '';

	let totalDistanceMeters = stepsCount * footPrintMeters;
	console.log(totalDistanceMeters);

	let speedMetersSec = speedKmh / 3.6;
	console.log({ speedMetersSec });

	let totalTimeNeededMinutes = totalDistanceMeters / speedMetersSec / 60;
	console.log(totalTimeNeededMinutes);

    let delays = Math.floor(totalDistanceMeters / 500)
    console.log(delays);

    
}

timeToWalk(4000, 0.6, 5);
