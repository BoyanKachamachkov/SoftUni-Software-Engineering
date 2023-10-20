function factorialDivision(n1, n2) {
  let factorial1 = calcFactorial(n1);
  let factorial2 = calcFactorial(n2);

  let result = factorial1 / factorial2;
  console.log(result.toFixed(2));

  function calcFactorial(num) {
    let factorial = 1;

    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }
}
factorialDivision(5, 2);
factorialDivision(6, 2);
