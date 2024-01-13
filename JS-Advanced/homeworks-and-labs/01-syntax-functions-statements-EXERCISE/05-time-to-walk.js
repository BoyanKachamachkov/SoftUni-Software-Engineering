function timeToWalk(steps, stepsInMeters, speedKmh) {
	const distanceMeters = steps * stepsInMeters; //2600 metres to uni.
	const speedMeterSec = speedKmh / 3.6;

    const totalTimeSec = distanceMeters * speedMeterSec /60
    console.log(totalTimeSec);
}
timeToWalk(4000, 0.6, 5); //00:32:48
// timeToWalk(2564, 0.7, 5.5);
