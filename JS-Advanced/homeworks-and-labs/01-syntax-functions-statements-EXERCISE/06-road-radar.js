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
				let diff = speed - cityLimit;
				let status = '';

				if (diff <= 20) {
					status = 'speeding';
				} else if (diff <= 40) {
					status = 'excessive speeding';

				} else {
					status = 'reckless driving';
				}
				console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
			}
			break;
		case 'residential':
			if (speed <= residentialLimit) {
				console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
			} else {
				let diff = speed - residentialLimit;
				let status = '';

				if (diff <= 20) {
					status = 'speeding';
				} else if (diff <= 40) {
					status = 'excessive speeding';

				} else {
					status = 'reckless driving';
				}
				console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
			}
			break;
		case 'interstate':
			if (speed <= interstateLimit) {
				console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
			} else {
				let diff = speed - interstateLimit;
				let status = '';

				if (diff <= 20) {
					status = 'speeding';
				} else if (diff <= 40) {
					status = 'excessive speeding';

				} else {
					status = 'reckless driving';
				}
				console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
			}
			break;
		case 'motorway':
			if (speed <= motorwayLimit) {
				console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
			} else {
				let diff = speed - motorwayLimit;
				let status = '';

				if (diff <= 20) {
					status = 'speeding';
				} else if (diff <= 40) {
					status = 'excessive speeding';

				} else {
					status = 'reckless driving';
				}
				console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
			}
			break;
	}
}

roadRadar(40, 'city');
roadRadar(200, 'motorway');
roadRadar(120, 'interstate');
roadRadar(21, 'residential');
