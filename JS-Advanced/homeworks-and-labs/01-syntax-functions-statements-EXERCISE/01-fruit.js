function fruitCalc(type, grams, priceKg) {
    let cost = (grams * priceKg / 1000).toFixed(2);
    console.log(`I need $${cost} to buy ${(grams / 1000).toFixed(2)} kilograms ${type}.`);
}

fruitCalc('orange', 2500, 1.80);