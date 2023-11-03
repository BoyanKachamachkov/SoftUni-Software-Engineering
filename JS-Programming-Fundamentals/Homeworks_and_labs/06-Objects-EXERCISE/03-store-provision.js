function storeProvision(stock, delivery) {
  let storedProducts = {};

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let qty = stock[i + 1];

    storedProducts[product] = Number(qty); //push the given iteration to object
  }

  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    let qty = delivery[i + 1];

    if (!storedProducts.hasOwnProperty(product)) {
      storedProducts[product] = 0;
    }

    storedProducts[product] += Number(qty);
  }

  for (const product in storedProducts) {
    console.log(`${product} -> ${storedProducts[product]}`);
  }
}
storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
