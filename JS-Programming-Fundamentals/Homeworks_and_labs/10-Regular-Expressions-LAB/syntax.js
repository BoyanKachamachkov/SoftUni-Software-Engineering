// RegExp literal
let literalPattern = /[A-Za-z0-9]+/;

// RegExp consturctor
let regexp = new RegExp(literalPattern);
let regexp2 = new RegExp('/[A-Za-z0-9]+/');

console.log(regexp, regexp2);