let pattern = /\w+\(\)/;
let text = 'When you want to know whether a ptatern is found in a string, use test() or search() methods';

let hasMatch = pattern.test(text);
console.log(hasMatch); //true