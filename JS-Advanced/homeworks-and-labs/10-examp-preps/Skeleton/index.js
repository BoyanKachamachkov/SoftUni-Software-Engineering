function solve() {
	let buttonElement = document.querySelector('.admin-view .action button');

	buttonElement.addEventListener('click', (e) => {
		// stop reloading the page (natural behaviour)
		e.preventDefault();

		// input + unique name? --> input[name=""]
		let lectureNameElement = document.querySelector('input[name="lecture-name"]');
		let lectureDateElement = document.querySelector('input[name="lecture-date"]');
		let lectureModuleElement = document.querySelector('select[name="lecture-module"]')


		// valid input
		if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement == 'Select module') {
			return;
		}


		// TODO Create lecture
		let liElement = document.createElement('li')
		liElement.classList.add('flex')
		let courseHeadingElement = document.createElement('h4')
		courseHeadingElement.textContent = `${lectureNameElement.value} - ${formatDate(lectureDateElement.value)}`



		// TODO: Create module
	});


	function formatDate(dateInput) {
		let [date, time] = dateInput.split('T')
		date = date.replace(/-/g, '/')

		return `${date} - ${time}`
	}
}
