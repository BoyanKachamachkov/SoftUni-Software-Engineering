function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

	// ! capture elements that we work with
	const input = document.querySelector('#inputs>textarea');
	const bestRestaurant = document.querySelector('#bestRestaurant>p');
	const workersResult = document.querySelector('#workers>p');

	function onClick() {
		//   TODO:

		const arr = JSON.parse(input.value);

		const restaurants = {};

		arr.forEach((element) => {
			const [name, workers] = element.split(' - ');
			console.log({ name });
			console.log({ workers });

			const workersCollection = workers.split(', ');

			// ! workers dictionary collection
			const workersDictCollection = [];
			for (const worker of workersCollection) {
				const [workerName, salary] = worker.split(' ');
				workersDictCollection.push({ name: workerName, salary: salary });
			}

			if (restaurants[name]) {
				workersDictCollection = workersDictCollection.concat(
					restaurants[name].workers
				);
			}

			workersDictCollection.sort((w1, w2) => w2.salary - w1.salary);

			const bestSalary = workersDictCollection[0].salary;
			const totalSalary = workersCollection.reduce(
				(sum, w) => sum + w.salary,
				0
			);
			const avgSalary = totalSalary / workersCollection.length;

			restaurants[name] = {
				workers: workersCollection,
				averageSalary: avgSalary,
				bestSalary,
			};
		});

		let bestRestaurantResult = 0;
		let bestRestaurant = undefined;

		for (const name in restaurants) {
			if(restaurants[name])
		}
	}
}
