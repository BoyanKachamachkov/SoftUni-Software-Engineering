let arr = [10, 20, 30, 40, 50];

console.log(arr, arr.length);

console.log(arr.slice(1, 3));
console.log(arr.slice(1)); //ako ne podadem 2ri element, spira nakraq chak
console.log(arr.slice()); // ako ne dadem dori purvi, cqlostno kopie
console.log(arr.slice(1, -1)); //propusni 1 v nachaloto i 1 v kraq i vurni towa posredata

// otricatelno = propusni tolkowa elementa nakraq

// console.log(arr, arr.length);

// arr.push(50);
// console.log(arr, arr.length);

// let num = arr.pop(); //capture in var the return value
// console.log(arr, arr.length);
// console.log(num);

// console.log('------');

// arr.unshift(0);
// console.log(arr, arr.length);

// let num2 = arr.shift();
// console.log(arr, arr.length);
// console.log(num2);

// console.log('------');

// console.log(arr.includes(40));
// console.log(arr.includes(35));
// console.log(arr.indexOf(40));
// console.log(arr.indexOf(35)); //invalid index = -1

// if (arr.indexOf(40) != -1) {
//   //checking if its inside the proper way
//   // ...
// }

// if (arr[11] != undefined) {
//   //checking if index has value
//   // ...
// }
