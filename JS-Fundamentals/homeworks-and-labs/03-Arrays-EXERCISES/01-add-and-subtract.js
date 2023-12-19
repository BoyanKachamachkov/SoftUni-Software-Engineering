function addAndSub(arr) {
  let newArr = [];
  let originalSum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let index = i;
    originalSum += curNum;

    if (curNum % 2 == 0) {
      curNum += index;
      newSum += curNum;
      newArr.push(curNum);
    } else {
      curNum -= index;
      newSum += curNum;
      newArr.push(curNum);
    }
  }

  console.log(newArr);
  console.log(originalSum);
  console.log(newSum);
}
addAndSub([5, 15, 23, 56, 35]);
