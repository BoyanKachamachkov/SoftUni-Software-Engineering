// sort()
let numbers = [2, 4, 1, 6, 2];
let cars = ['bmw', 'mercedess', 'toyota', 'vw', 'audi'];

// Using default sort
// ASCII codes thats why V -upper case went upfront (86) vs. value 97 for "a" small letter
//
numbers.sort();
cars.sort();
console.log('--Using default sort--');
console.log(numbers); //mutates the original array
console.log(cars); //mutates the original array

console.log(`--Default sort limitation--`);
numbers = [2, 4, 1, 6, 2, 100];
cars = ['bmw', 'mercedess', 'toyota', 'VW', 'audi'];

cars.sort();
numbers.sort();
console.log(cars);
console.log(numbers);

console.log('--Sort numbers');
numbers = [2, 4, 1, 6, 2, 100];
// numbers.sort((a, b) => {
//   if (a < b) { // a-b=negative
//     return -1;
//   } else if (a > b) { //a-b = positive
//     return 1;
//   } else { //a-b == zero
//     return 0;
//   }
// });

numbers.sort((a, b) => a - b); //b-a for descending order (низходящ) най-голямото отпред

console.log(numbers);

//
console.log('--Sort strings');
cars = ['bmw', 'mercedess', 'toyota', 'VW', 'audi'];
cars.sort((a, b) => a.localeCompare(b));

console.log(cars);
