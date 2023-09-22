function solve2(num1, num2) {
  if (num2 > 15) {
    num2 = 15;
  }
  let sum = num1.toFixed(num2);
  console.log(parseFloat(sum));
}
