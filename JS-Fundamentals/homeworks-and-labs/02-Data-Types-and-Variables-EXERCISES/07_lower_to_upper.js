function check(char) {
  let code = char.charCodeAt();

  //asci table below 90 are only UPPER CASE
  if (code <= 90) {
    console.log('upper-case');
  } else {
    console.log('lower-case');
  }
}

check('L'); //upper-case

//solution 2
function solve(char) {
  if (char == char.toLowerCase()) {
    console.log('lower-case');
  } else {
    console.log('upper-case');
  }
}
solve('L');
