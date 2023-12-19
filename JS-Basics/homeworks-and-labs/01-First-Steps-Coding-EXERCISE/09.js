function aquarium(input) {
  let v = Number(input[0]) * Number(input[1]) * Number(input[2]);
  v = v * 0.001;
  const taken = Number(input[3]) / 100;

  let volumeNeeded = v * (1 - taken);
  console.log(volumeNeeded);
}
