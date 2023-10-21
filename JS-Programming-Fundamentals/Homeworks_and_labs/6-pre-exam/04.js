function computerStore(arr) {
  let totalPrice = 0;

  let action = arr.shift();

  while (action !== 'regular' && action !== 'special') {
    if (action <= 0) {
      console.log(`Invalid price!`);
      action = arr.shift();
      continue;
    }
    totalPrice += Number(action);

    action = arr.shift();
  }

  let tax = totalPrice * 0.2;
  let finalPrice = totalPrice + tax;

  if (action == 'special') {
    finalPrice *= 0.9;
  }

  if (totalPrice == 0) {
    console.log(`Invalid order!`);
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
  }
}
// computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
// computerStore([
//   '1023',
//   '15',
//   '-20',
//   '-5.50',
//   '450',
//   '20',
//   '17.66',
//   '19.30',
//   'regular',
// ]);

computerStore(['regular']);
