class OnlineShop {
  warehouseSpace = 0;
  products = [];
  sales = [];

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
  }

  loadingStore(product, quantity, spaceRequired) {}

  quantityCheck(product, minimalQuantity) {}

  sellProduct(product) {}

  revision() {}
}
