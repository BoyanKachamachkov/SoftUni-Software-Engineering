function solve() {
	let buttonElement = document.querySelector('.admin-view .action button');

	buttonElement.addEventListener('click', (e) => {
		// stop reloading the page (natural behaviour)
		e.preventDefault();

		// input + unique name? --> input[name=""]
		let lectureNameElement = document.querySelector('input[name="lecture-name"]');
		let lectureDateElement = document.querySelector('input[name="lecture-date"]');
		let lectureModuleElement = document.querySelector('select[name="lecture-module"]')


		console.log(lectureModuleElement);
	});
}
