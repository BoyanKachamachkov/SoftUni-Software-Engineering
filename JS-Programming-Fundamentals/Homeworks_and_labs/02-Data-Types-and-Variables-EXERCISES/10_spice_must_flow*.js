function solve(currentYield) {
  //initialize result variable
  let spice = 0;
  let days = 0;

  while (currentYield >= 100) {
    days++;
    spice += currentYield - 26;
    currentYield -= 10;
  }

  if (spice >= 26) {
    spice -= 26;
  }
  console.log(days);
  console.log(spice);
}
solve(111); // 2 -136
solve(450); //36 -8938
solve(80); //36 -8938
