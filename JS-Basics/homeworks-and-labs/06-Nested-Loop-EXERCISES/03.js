function primeNonPrime(input) {
  let index = 0;
  let curIndex = input[index];
  index++;

  let sumPrime = 0;
  let sumNonPrime = 0;

  while (curIndex !== 'stop') {
    let curNum = Number(curIndex); //трансферираме 3 като стринг в число тук на итерация 1.

    if (curNum < 0) {
      console.log('Number is negative.');
      curIndex = input[index];
      index++;
      continue;
    }
    let isPrime = true; //предполагаме че всяко число е просто докато не установим че не е.

    for (let divider = 2; divider < curNum; divider++) {
      if (curNum % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sumPrime += curNum;
    } else {
      sumNonPrime += curNum;
    }

    curIndex = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
