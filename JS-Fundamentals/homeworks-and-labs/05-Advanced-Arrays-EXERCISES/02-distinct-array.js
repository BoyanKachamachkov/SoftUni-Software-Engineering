function distinct(arr) {
  let uniqueNums = [];

  for (let num of arr) {
    if (!uniqueNums.includes(num)) uniqueNums.push(num);
  }

  console.log(uniqueNums.join(' '));
}
distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);
