function sum(input) {
  let interest = (Number(input[0]) * Number(input[2])) / 100;
  let yearlyInterest = interest / 12;
  let totalSum = Number(input[0]) + Number(input[1]) * yearlyInterest;
  console.log(totalSum);
}
