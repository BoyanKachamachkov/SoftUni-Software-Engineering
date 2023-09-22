function special(num) {
  for (let i = 1; i <= num; i++) {
    let currNum = String(i);
    let sum = 0;

    for (let b = 0; b < currNum.length; b++) {
      let digit = Number(currNum[b]);
      sum += digit;
    }

    if (sum == 5 || sum == 7 || sum == 11) {
      console.log(`${currNum} -> True`);
    } else {
      console.log(`${currNum} -> False`);
    }
  }
}
special(20);
