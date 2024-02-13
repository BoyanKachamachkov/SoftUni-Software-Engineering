class WineSelection {

  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    // validate input necessary?


    if (this.space == 0) {
      throw new Error('Not enough space in the cellar.');
    }
    this.space--;


    let result = {
      wineName,
      wineType,
      price,
      paid: false,
    };
    this.wines.push(result);
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;

  }

  payWineBottle(wineName, price) {
    let currentWine = this.wines.find(x => x.wineName == wineName);
    if (!currentWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (currentWine.paid === true) {
      throw new Error(`${wineName} has already been paid.`);
    }

    currentWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a price ${price}$.`;
  }

}




// const selection = new WineSelection(2);
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

const selection = new WineSelection(2);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

