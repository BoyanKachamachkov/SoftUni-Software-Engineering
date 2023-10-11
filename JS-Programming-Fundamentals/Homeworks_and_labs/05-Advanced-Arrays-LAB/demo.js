let arr = [10, 20, 30, 40];

console.log(arr, arr.length);

arr.push(50);
console.log(arr, arr.length);

let num = arr.pop(); //capture in var the return value
console.log(arr, arr.length);
console.log(num);

console.log('------');

arr.unshift(0);
console.log(arr, arr.length);

let num2 = arr.shift();
console.log(arr, arr.length);
console.log(num2);

console.log('------');

console.log(arr.includes(40));
console.log(arr.includes(35));
console.log(arr.indexOf(40));
console.log(arr.indexOf(35)); //invalid index = -1

if (arr.indexOf(40) != -1) {
  //checking if its inside the proper way
  // ...
}

if (arr[11] != undefined) {
  //checking if index has value
  // ...
}
