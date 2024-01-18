function roadRadar(speed, area) {
	const motorwayLimit = 130;
	const interstateLimit = 90;
	const cityLimit = 50;
	const residentialLimit = 20;

	switch (area) {
		case 'city':
			if (speed <= cityLimit) {
				console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
			} else {
				let difference = speed - cityLimit;
				let punishment = '';
				if (difference <= 20) {
					punishment = 'speeding';
				} else if (difference <= 40) {
					punishment = 'excessive speeding';
				} else if (difference > 40) {
					punishment = 'reckless driving';
				}
				console.log(
					`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${punishment}`
				);
			}
			break;

		case 'residential':
			if (speed <= residentialLimit) {
				console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
			} else {
				let difference = speed - residentialLimit;
				let punishment = '';
				if (difference <= 20) {
					punishment = 'speeding';
				} else if (difference <= 40) {
					punishment = 'excessive speeding';
				} else if (difference > 40) {
					punishment = 'reckless driving';
				}
				console.log(
					`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${punishment}`
				);
			}
			break;

		case 'motorway':
			if (speed <= motorwayLimit) {
				console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
			} else {
				let difference = speed - motorwayLimit;
				let punishment = '';
				if (difference <= 20) {
					punishment = 'speeding';
				} else if (difference <= 40) {
					punishment = 'excessive speeding';
				} else if (difference > 40) {
					punishment = 'reckless driving';
				}
				console.log(
					`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${punishment}`
				);
			}
			break;

		case 'interstate':
			if (speed <= interstateLimit) {
				console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
			} else {
				let difference = speed - interstateLimit;
				let punishment = '';
				if (difference <= 20) {
					punishment = 'speeding';
				} else if (difference <= 40) {
					punishment = 'excessive speeding';
				} else if (difference > 40) {
					punishment = 'reckless driving';
				}
				console.log(
					`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${punishment}`
				);
			}
			break;
	}
	// within limits?
	// -print
	// not within limits?
	// 0-20kmh -> speeding
	// 21-40 -> excessive speeding
	// 40+ -> reckless driving
}

roadRadar(40, 'city');
roadRadar(200, 'motorway');
roadRadar(120, 'interstate');
roadRadar(21, 'residential');
