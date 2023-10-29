//  ключ + стойност = пропорции
// variable is personalInformation
// firstName (and others) are just properties, they are not variables.

let personalInformation = {
  firstName: 'Boyan',
  lastName: 'Petrov',
  age: 28,
  eyeColor: 'brown',
  isMale: true,
};

console.log(personalInformation.firstName);
// dynamic  assign property
personalInformation.weight = 79;

// delete property (delete operator only works on object properties!)
delete personalInformation.weight; //rare use

console.log(personalInformation);

// using bracket syntax
console.log(personalInformation['firstName']); //same as the below
console.log(personalInformation.firstName); //dot syntax

// access property by variable (situation 1 to use bracket SYNTAX)
let propertyName = 'firstName';
console.log(personalInformation[propertyName]);

// (situation 2 to use bracket) using diff name for properpty name
let carInfo = {
  'car-model': 'toyota', //this is valid, but we should use strings for the KEY, only in very edge cases
};
console.log(carInfo.car - model); //this is not gonna work!
console.log(carInfo['car-model']); //this will work and is the 2nd reason to use bracket notation
