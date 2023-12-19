// RegExp literal
let literalPattern = /[A-Za-z0-9]+/; //not dynamic

// global tags are put after the last /
/[A-Za-z0-9]+/g; //global == all matches or one (if there is no g)
/[A-Za-z0-9]+/gi; //global and case insensitive

// RegExp consturctor
let regexp = new RegExp(literalPattern);
let regexp2 = new RegExp('/[A-Za-z0-9]+/'); //can be dynamic
let regexp3 = new RegExp('/[A-Za-z0-9]+/', 'gi'); //can be dynamic & you have to declare global flags in a sep. string

// both above are REGEXPs, just declared differently
// 2 categories of METHODS (regExp methods && string methods)


