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
			let workers = workersString.split(', ').map((w) => {
				let [name, salary] = w.split(' ');
				return { name, salary: Number(salary) };
			});

			if (!restaurants[restaurantName]) {
				restaurants[restaurantName] = {
					workers: [],
					getAverageSalary: function () {
						return (
							this.workers.reduce((acc, el) => acc + el, 0) /
							this.workers.length
						);
					},
				};
			}
		}

		// 5. calculate best restaurant

		// 6. insert best restaurant and workers into DOM
	}
}
