let pattern = /\w+\(\)/;
let text = 'When you want to know whether a ptatern is found in a string, use test()z or search()z methods';

let hasMatch = pattern.test(text);
console.log(hasMatch); //true