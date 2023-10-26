function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let finalArr = [];

  // console.log(sortedArr); //(10) [1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
  while (arr.length > 0) {
    let maxNum = sortedArr.pop();
    let minNum = sortedArr.shift();

    finalArr.push(maxNum, minNum);
  }

  console.log(finalArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
