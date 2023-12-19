function calculator(a, b, operator) {
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;

  let result;

  switch (operator) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
  }

  console.log(result);
}
calculator(5, 5, 'multiply');
calculator(50, 13, 'subtract');
calculator(12, 19, 'add');
calculator(40, 8, 'divide');
