function orders(product, qty) {
  let totalPrice = 0;

  if (product == 'coffee') {
    totalPrice += qty * 1.5;
  } else if (product == 'water') {
    totalPrice += qty * 1;
  } else if (product == 'coke') {
    totalPrice += qty * 1.4;
  } else if (product == 'snacks') {
    totalPrice += qty * 2;
  }

  console.log(totalPrice.toFixed(2));
}
orders('water', 5);
orders('coffee', 2);
