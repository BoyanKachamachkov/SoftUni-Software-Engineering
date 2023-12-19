function delivery(input) {
  let x = Number(input[0]) * 10.35;
  let y = Number(input[1]) * 12.4;
  let z = Number(input[2]) * 8.15;
  let mainMenu = x + y + z;
  let desert = mainMenu * 0.2;
  const d = 2.5;

  let bottomLine = mainMenu + desert + d;
  console.log(bottomLine);
}
