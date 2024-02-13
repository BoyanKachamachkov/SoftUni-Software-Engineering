class WineSelection {

  constructor(space) {
    this.space = 0;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {

  }
}




const selection = new WineSelection(2);
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
