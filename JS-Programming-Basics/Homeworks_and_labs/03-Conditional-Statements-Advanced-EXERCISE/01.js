function demo(input) {
  let projectionType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let totalIncome = 0;

  if (projectionType === 'Premiere') {
    totalIncome = rows * columns * 12;
  } else if (projectionType === 'Normal') {
    totalIncome = rows * columns * 7.5;
  } else if (projectionType === 'Discount') {
    totalIncome = rows * columns * 5.0;
  }
  console.log(`${totalIncome.toFixed(2)} leva`);
}
