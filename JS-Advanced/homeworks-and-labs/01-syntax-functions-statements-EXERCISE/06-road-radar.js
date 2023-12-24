function roadRadar(speed, area) {
	let limit = 0;

	switch (area) {
		case 'resential':
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

  console.log(area);
}

roadRadar(40, 'city');
roadRadar(200, 'motorway');
roadRadar(120, 'interstate');
roadRadar(21, 'residential');
