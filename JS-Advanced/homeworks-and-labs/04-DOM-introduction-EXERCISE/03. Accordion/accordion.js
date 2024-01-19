function toggle() {
	let btnMoreEl = document.getElementsByClassName('button')[0]; //0 , otherwise we get the HTML collection

	let textEl = document.getElementById('extra');

	// change button text
	btnMoreEl.textContent = btnMoreEl.textContent === 'More' ? 'Less' : 'More';

	// show/hide text
	textEl.style.display = textEl.style.display === 'block' ? 'none' : 'block';
}
