// FIRST CLASS functions

// can be passed as an ARG
// can be returned as a VALUE
// can be assigned to a VARIABLE

function sayHello() {
	return 'Hello, ';
}
function greeting(helloMessage, name) {
	return helloMessage() + name;
}
console.log(greeting(sayHello, 'JavaScript!'));

// ---------------RETURN
function sayHello() {
	return function () {
		console.log('Hello!');
	};
}

// ---------------CAN BE ASSIGNED AS A VALUE TO A VARIABLE
const write = function () {
	return 'Hello, world!';
};
