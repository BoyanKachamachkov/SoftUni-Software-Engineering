// change func context

function fly(info) {
	console.log(`${this.name} is flying   ${info}`);
}

let contextObject = {
	name: 'Wonder Woman',
};

// fly('with cape'); //global context
// fly.call(contextObject, 'With rope'); //specific context
// fly.call({ name: 'Maikati' });
// fly.apply({name: 'Bashta ti'}, ['with mind'])


// USING BIND

let wonderWomanFly = fly.bind(contextObject)
wonderWomanFly('with plane ')
