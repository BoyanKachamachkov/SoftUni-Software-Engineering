const btn = document.querySelector('#v2');

btn.onclick = function () {
	console.log('you clicked me!');
	console.log('I hope it worked!');
};

function scream() {
	console.log('AHHHHH!');
	console.log('STOP TOUCHING ME');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => alert('you clicked in the h1!');

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', scream);

function twist() {
	console.log('twist');
}

function shout() {
	console.log('shout');
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);


const colorBtn = document.querySelector('#color');
colorBtn.addEventListener('click', () =>{
    console.log('click');
})