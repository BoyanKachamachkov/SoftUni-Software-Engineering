class OnlineShop {
  warehouseSpace = 0;
  products = [];
  sales = [];

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
  }

  loadingStore(product, quantity, spaceRequired) {
    // enough space or not?
    if (this.warehouseSpace < spaceRequired) {
      throw new Error('Not enough space in the warehouse.');
    }

    this.products.push({
      product: product,
      quantity: quantity,
    });

    // we took some space
    this.warehouseSpace -= spaceRequired;

    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    const data = this.findProduct(product);

    if (!data) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    if (data.quantity >= minimalQuantity) {
      return `You have enough from the product ${product}.`;
    }
  }

  sellProduct(product) {}

  revision() {}

  findProduct(product) {
    // is there such product already in our arr?
    const data = this.products.find((p) => p.product == product);

    if (!data) {
      //if not truthy
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    return data;
  }
}

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40,));
