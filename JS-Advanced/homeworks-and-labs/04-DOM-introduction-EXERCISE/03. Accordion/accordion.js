function toggle() {
	// 1. Select elements
	let btn = document.getElementsByClassName('button')[0];
	let text = document.getElementById('extra');

	// show/hide text and change button text
	// change button text
	btn.textContent = btn.textContent === 'More' ? 'Less' : 'More';

	// show/hide content
	text.style.display = text.style.display === 'block' ? 'none' : 'block';
}
