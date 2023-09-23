function sum(n) {
  let nAsString = String(n);
  let sum = 0;

  for (let i = 0; i < nAsString.length; i++) {
    sum += Number(nAsString[i]);
  }
  console.log(sum);
}

sum(543); //12
