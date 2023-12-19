function sums(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let result = '';

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let evenPositionSum = 0;
    let oddPositionSum = 0;

    let curNumAsString = curNum.toString();

    for (let i = 0; i < curNumAsString.length; i++) {
      let curDigit = Number(curNumAsString[i]);
      let position = i + 1;

      if (i % 2 === 0) {
        evenPositionSum += curDigit;
      } else {
        oddPositionSum += curDigit;
      }
    }

    if (evenPositionSum === oddPositionSum) {
      result += curNumAsString + ' ';
    }
  }

  console.log(result);
}
