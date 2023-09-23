function sum(n) {
  //transfer to string
  //for cycle for the string
  //use buffer variable and fill it up with Number per index of every char
  let nAsString = String(n);
  let sum = 0;

  for (let i = 0; i < nAsString.length; i++) {
    sum += Number(nAsString[i]);
  }
  console.log(sum);
}

sum(543); //12
