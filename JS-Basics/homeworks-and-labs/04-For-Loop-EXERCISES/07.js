function trekking(input) {
  let groupsCount = Number(input[0]);

  let musalaCount = 0;
  let monblanCount = 0;
  let kiliCount = 0;
  let k2Count = 0;
  let everestCount = 0;

  for (let index = 1; index <= input.length - 1; index++) {
    let numberOfPeople = Number(input[index]);

    if (numberOfPeople <= 5) {
      musalaCount += numberOfPeople;
    } else if (numberOfPeople <= 12) {
      monblanCount += numberOfPeople;
    } else if (numberOfPeople <= 25) {
      kiliCount += numberOfPeople;
    } else if (numberOfPeople <= 40) {
      k2Count += numberOfPeople;
    } else {
      everestCount += numberOfPeople;
    }
  }

  let totalCountPeople =
    musalaCount + monblanCount + kiliCount + k2Count + everestCount;

  console.log(`${((musalaCount / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblanCount / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((kiliCount / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2Count / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((everestCount / totalCountPeople) * 100).toFixed(2)}%`);
}
