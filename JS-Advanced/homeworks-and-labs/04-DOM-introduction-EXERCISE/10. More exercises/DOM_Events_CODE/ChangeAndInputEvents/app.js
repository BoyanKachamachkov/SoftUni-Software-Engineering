const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// change event
input.addEventListener('change', function (e) {
	console.log('qewweqwe');
});

// input event
input.addEventListener('input', function (e) {
	h1.innerText = input.value;
});
