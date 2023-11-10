function storeProvision(stock, delivery) {
  let storeProvision = {};

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let qty = Number(stock[i + 1]);

    storeProvision[product] = qty;
  }

  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    let qty = Number(delivery[i + 1]);

    if (product in storeProvision) {
      storeProvision[product] += qty;
    } else {
      storeProvision[product] = qty;
    }
  }

  let entries = Object.entries(storeProvision);

  for (const entry of entries) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
