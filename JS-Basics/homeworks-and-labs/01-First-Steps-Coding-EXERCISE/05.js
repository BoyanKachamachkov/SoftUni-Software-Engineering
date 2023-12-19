function schoolMats(input) {
  let pricePens = Number(input[0]) * 5.8;
  let priceMarkers = Number(input[1]) * 7.2;
  let priceCleaning = Number(input[2]) * 1.2;
  let priceTotal = pricePens + priceMarkers + priceCleaning;
  let priceFinal = priceTotal - (priceTotal * Number(input[3])) / 100;
  console.log(priceFinal);
}
