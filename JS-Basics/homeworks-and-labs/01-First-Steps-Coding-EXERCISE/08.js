function yearlyTax(input) {
  const yearly = Number(input[0]);

  let shoes = yearly * 0.6;
  let clothes = shoes * 0.8;
  let ball = clothes / 4;
  let accessories = ball / 5;

  let bottomLine = yearly + shoes + clothes + ball + accessories;
  console.log(bottomLine);
}
