function movie(input) {
  let movieBudget = Number(input[0]);
  let statistsCount = Number(input[1]);
  let priceEquipmentPerStatist = Number(input[2]);

  let equipmentPrice = 0.1 * movieBudget;

  if (statistsCount > 150) {
    priceEquipmentPerStatist = 0.9 * priceEquipmentPerStatist;
  }

  let totalSpendings =
    equipmentPrice + priceEquipmentPerStatist * statistsCount;

  if (totalSpendings > movieBudget) {
    let neededMoney = totalSpendings - movieBudget;
    console.log('Not enough money!');
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = movieBudget - totalSpendings;
    console.log('Action!');
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
