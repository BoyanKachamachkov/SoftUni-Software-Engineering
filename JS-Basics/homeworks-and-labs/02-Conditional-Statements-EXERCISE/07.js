function shoppping(input) {
  let budget = Number(input[0]);

  let videoCardsCount = Math.round(Number(input[1]));
  let processorsCount = Math.round(Number(input[2]));
  let ramCount = Math.round(Number(input[3]));

  let videoCardsSum = 250 * videoCardsCount;

  let processorsPrice = 0.35 * videoCardsSum;
  let processorsSum = processorsPrice * processorsCount;

  let ramPrice = 0.1 * videoCardsSum;
  let ramSum = ramPrice * ramCount;

  let totalPrice = videoCardsSum + processorsSum + ramSum;

  if (videoCardsCount > processorsCount) {
    totalPrice = totalPrice * 0.85;
  }

  if (budget >= totalPrice) {
    let remainingMoney = budget - totalPrice;
    console.log(`You have ${remainingMoney.toFixed(2)} leva left!`);
  } else {
    let neededMoney = totalPrice - budget;
    console.log(
      `Not enough money! You need ${neededMoney.toFixed(2)} leva more!`
    );
  }
}
