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

			const workersOutput = [];
			for (const worker of workersCollection) {
				const workersToken = worker.split(' ');
				workersOutput.push();
			}
		});
	}
}
