function magicSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNums = arr[j];

      if (curNum + nextNums == n) {
        console.log(`${curNum} ${nextNums}`);
      }
    }
  }
}
// magicSum([1, 7, 6, 2, 19, 23], 8);
// 1 7
// 6 2
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
