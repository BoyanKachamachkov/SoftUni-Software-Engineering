//function declaration
function solve() {
  console.log('Function declaration');
}

//function expression
let func = function () {
  console.log('function expression');
};

//function calls inside a function
function main() {
  solve();
  func();
}
