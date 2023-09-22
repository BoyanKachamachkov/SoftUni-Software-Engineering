function demo(input) {
  let typeFlowers = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);

  let totalBudgetNeeded = 0;

  if (typeFlowers === 'Roses') {
    totalBudgetNeeded += flowersCount * 5;
    if (flowersCount > 80) {
      totalBudgetNeeded *= 0.9;
    }
  } else if (typeFlowers === 'Dahlias') {
    totalBudgetNeeded += flowersCount * 3.8;
    if (flowersCount > 90) {
      totalBudgetNeeded *= 0.85;
    }
  } else if (typeFlowers === 'Tulips') {
    totalBudgetNeeded += flowersCount * 2.8;
    if (flowersCount > 80) {
      totalBudgetNeeded *= 0.85;
    }
  } else if (typeFlowers === 'Narcissus') {
    totalBudgetNeeded += flowersCount * 3;
    if (flowersCount < 120) {
      totalBudgetNeeded *= 1.15;
    }
  } else if (typeFlowers === 'Gladiolus') {
    totalBudgetNeeded += flowersCount * 2.5;
    if (flowersCount < 80) {
      totalBudgetNeeded *= 1.2;
    }
  }

  if (budget >= totalBudgetNeeded) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${(
        budget - totalBudgetNeeded
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(totalBudgetNeeded - budget).toFixed(
        2
      )} leva more.`
    );
  }
}
