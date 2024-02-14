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
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    let currentWine = this.wines.find(x => x.wineName === wineName);

    if (!currentWine) {
      throw new Error("The wine, you're looking for, is not found.");
    }

    if (!currentWine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines.filter(x => x.wineName !== wineName);

    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    // called with one param
    if (wineType) {
      let currentTarget = this.wines.find(x => x.wineType === wineType);

      if (!currentTarget) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }

      return `${currentTarget.wineName} > ${currentTarget.wineType} - ${currentTarget.paid ? 'Has Paid' : 'Not Paid'}.`;
    }




    // called without param
    let result = [
      `You have space for ${this.space - this.wines.length} bottles more.`,
      `You paid ${this.bill}$ for the wine.`
    ];

    this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).forEach(x =>
      result.push(`${x.wineName} > ${x.wineType} - ${x.paid ? 'Has Paid' : 'Not Paid'}.`
      ));

    return result.join('\n');

  }


}


const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
