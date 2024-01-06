function toggle() {
	let btn = document.getElementsByClassName('button')[0];
	let text = document.getElementById('extra');

	btn.textContent = btn.textContent === 'More' ? 'Less' : 'More';
    text.style.display = text.style.display === 'block' ? 'none' : 'block'
}
