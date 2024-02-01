// Exceptions that stop our function
let arr = new Array(-1) //range error
let bigArr = new Array(9999999999999) // range error
let index = undefined.indexOf('hi') //type error
console.log(George); //reference error
console.print('hi') //type error
// --------------------------------------------------------------
// SPECIAL VALUES ERROR HANDLING
let sqrt = Math.sqrt(-1) // NAN special value

let sub = 'hello'.substring(2, 1000) //llo
let sub2 = 'hello'.substring(-100, 100) //hello
//error avoidance - invalid ranges are adjusted
let invalid = new Date('Christmas') //invalid date
let date = invalid.getDate(); //NAN