const btn = document.querySelector('#v2');

btn.onclick = function () {
	console.log('you clicked me!');
	console.log('I hope it worked!');
};

function scream(){
    console.log('AHHHHH!');
    console.log('STOP TOUCHING ME');
}

btn.onmouseenter = scream;