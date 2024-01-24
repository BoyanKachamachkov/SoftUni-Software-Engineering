function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);

	function onClick() {
		//   TODO:

		// 1. select elements for input
		const textAreaInput = document.querySelector('textarea');

		// 2. extract/parase input data
		let text = textAreaInput.value;
		let inputArr = JSON.parse(text);

		// 3. add object to keep restaurant and workers data
		let restaurants = {};

		// 4. fill restaurant object with input data
		for (let index = 0; index < inputArr.length; index++) {
			let [restaurantName, workersString] = inputArr[index].split(' - ');
			let inputWorkers = workersString.split(', ').map((w) => {
				let [name, salary] = w.split(' ');
				return { name, salary: Number(salary) };
			});

			if (!restaurants[restaurantName]) {
				restaurants[restaurantName] = {
					workers: [],
					restaurantName: restaurantName,
					getAverageSalary: function () {
						return (
							this.workers.reduce((acc, el) => acc + el, 0) /
							this.workers.length
						);
					},
				};
			}

			restaurants[restaurantName].workers =
				restaurants[restaurantName].workers.concat(inputWorkers);
		}

		// 5. calculate best restaurant

		let sortedRestaurants = Object.values(restaurants).sort((a, b) => {
			let bAvgSalary =
				b.worked.reduce((acc, el) => acc + el.salary, 0) / b.workers.length;
			let aAvgSalary =
				b.worked.reduce((acc, el) => acc + el.salary, 0) / a.workers.length;

			return bAvgSalary - aAvgSalary;
		});

		let bestRestaurant = sortedRestaurants[0];
		let sortedWorkers = bestRestaurant.workers.sort(
			(a, b) => b.salary - a.salary
		);

		let averageSalary = (
			bestRestaurant.workers.reduce((acc, el) => acc + el.salary, 0) /
			bestRestaurant.workers.length
		).toFixed(2);
		let bestSalary = sortedWorkers[0].salary.toFixed(2);

		let topRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;

		let workersString = sortedWorkers
			.map((x) => `Name: ${x.name} With Salary: ${x.salary}`)
			.join(' ');
		// 6. insert best restaurant and workers into DOM

		let bestRestaurantElement = document.querySelector('#bestRestaurant p');
		let workersElement = document.querySelector('#workers p');

		bestRestaurantElement.textContent = topRestaurantString;
		workersElement.textContent = workersString;
	}
}
