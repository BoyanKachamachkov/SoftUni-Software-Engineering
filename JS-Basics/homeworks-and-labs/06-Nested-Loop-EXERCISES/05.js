function specialnumbers(input) {
  let n = Number(input[0]);
  let startNum = 1111;
  let endNum = 9999;
  let result = '';

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let isSpecial = true;
    let curNumAsString = curNum.toString(); //"1111"

    for (let i = 0; i < curNumAsString.length; i++) {
      let curDigit = Number(curNumAsString[i]); //0 index demek 1.

      if (n % curDigit !== 0) {
        isSpecial = false;
        break;
      }
    }
    if (isSpecial) {
      result += curNum + ' ';
    }
  }
  console.log(result);
}
