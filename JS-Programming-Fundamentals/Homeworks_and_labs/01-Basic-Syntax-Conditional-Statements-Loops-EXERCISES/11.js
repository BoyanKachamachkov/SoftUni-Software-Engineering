function mine(input) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;
  let boughtBitcoins = 0;
  let totalMoneyLeft = 0;
  let firstBtcDay = 0;
  let confirmFirstDay = 0;

  for (let i = 1; i <= input.length; i++) {
    let dailyGold = input[i - 1];

    if (i % 3 === 0) {
      dailyGold *= 0.7;
    }
    dailyGold *= goldPrice;
    totalMoneyLeft += dailyGold;

    while (totalMoneyLeft >= bitcoinPrice) {
      totalMoneyLeft -= bitcoinPrice;
      boughtBitcoins++;
      confirmFirstDay++;
      if (confirmFirstDay === 1) {
        firstBtcDay = i;
      }
    }
  }
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if (boughtBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBtcDay}`);
  }
  console.log(`Left money: ${totalMoneyLeft.toFixed(2)} lv.`);
}
