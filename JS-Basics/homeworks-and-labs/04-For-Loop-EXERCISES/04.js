function clever(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let pricePerToy = Number(input[2]);

  let savedM = 0;
  let moneyG = 10;

  for (let currBirthday = 1; currBirthday <= age; currBirthday++) {
    if (currBirthday % 2 !== 0) {
      //necheten RD
      savedM += pricePerToy;
    } else {
      savedM += moneyG - 1;
      moneyG += 10;
    }
  }

  if (savedM >= washerPrice) {
    let moneyLeft = savedM - washerPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washerPrice - savedM;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
