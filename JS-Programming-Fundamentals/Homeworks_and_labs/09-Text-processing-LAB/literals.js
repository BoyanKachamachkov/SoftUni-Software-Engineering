let doubleQuoted = 'Hello';

let singleQuoted = 'Wor\nld'; //we can only do multiline if we escape with /n

let multilineTempalteLiteral = `
first line
second line
last line
`;

/*
You can use singleQ, doubleQ inside temp. literals, also variables and multiline for apostrophe can you either escape it or use template

It's good practice to use single quotes for JS.
It's not a good practice to use only template literals for consistency, as it requires more performance from JS side to go through temp. literals
*/
let templateLiteral = `${singleQuoted} ${doubleQuoted}`;
//-----------------------------------------------------


//concatenation with +
let concatedString = doubleQuoted + ' ' + singleQuoted;
console.log(concatedString);