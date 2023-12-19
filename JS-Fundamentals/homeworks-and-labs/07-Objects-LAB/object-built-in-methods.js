// object.
// built-in methods

let info = {
  firstName: 'Boyan',
  lastName: 'Petrov',
  age: 28,
  eyeColor: 'brown',
  isMale: true,
};

console.log(Object.keys(info));

let objectProperties = Object.keys(info); //see all keys
let objectValues = Object.values(info); //see all values
let objectEnties = Object.entries(info); //returns nested arrs with the obj

console.log(objectValues);
