// JavaScript has 7 data types that are copied by Value:
// There are PRIMITIVE types
// their VALUES are directly saved in the STACK!!!
/*
1. Boolean
2. String
3. Number
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

// ------------------------------

// JavaScript has 3 data types that are copied by having their reference saved in the STACK!
// ONLY THEIR REFERENCE ADDRESS IS SAVED IN THE STACK!!!
/*
1. Arrays
2. Objects
3. Functions
*/

// pass value to function
let name = 'Pesho';

function changeName(name) {
  name = 'Gosho';
}
changeName(name);
console.log(name);
// ------------------------------------------------------------

// pass reference to function
let info = {
  name: 'Pesho',
  age: 20,
};

function changeInfoName(info) {
  info.name = 'gosho';
}

changeInfoName(info);
console.log(info.name);

// reference example 2
let numbers = [1, 2, 3]; //this variable is saved in the stack, but its value is saved in the heap, so in the stack we only have the address to the heap.

let numberCopy = numbers; //practically this equals to the same heap address

numberCopy[0] = 100; //both arrays are changed, since they point to the same VALUE, which is saved in the HEAP, not the stack.
console.log(numbers);
