function paint(input) {
  let x = (Number(input[0]) + 2) * 1.5;
  let y = Number(input[1]) * 1.1 * 14.5;
  let z = Number(input[2]) * 5;
  const q = 0.4;

  let totalSum = x + y + z + q;
  let staffPay = totalSum * 0.3 * Number(input[3]);
  let bottomLine = totalSum + staffPay;

  console.log(bottomLine);
}
