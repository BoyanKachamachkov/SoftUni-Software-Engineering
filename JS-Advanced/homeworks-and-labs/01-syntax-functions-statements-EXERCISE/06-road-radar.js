function roadRadar(speed, area) {
	let limit = 0;

	switch (area) {
		case 'residential':
			limit = 20;
			break;
		case 'city':
			limit = 50;
			break;
		case 'interstate':
			limit = 90;
			break;
		case 'motorway':
			limit = 130;
			break;
	}
	const speeding = speed - limit;

	if (speeding <= 0) {
		console.log(`Driving ${speed} km/h in a ${limit} zone`);
		return;
	}

	let status = '';
	if (speeding <= 20) {
		status = 'speeding';
	} else if (speeding <= 40) {
		status = 'excessive speeding';
	} else {
		status = 'reckless driving';
	}

	let difference = speed - limit;
	console.log(
		`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
	);
}

// roadRadar(40, 'city');
roadRadar(200, 'motorway');
roadRadar(120, 'interstate');
roadRadar(21, 'residential');
