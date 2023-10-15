function sumEvenNums(arr) {
  let sum = 0;
  // arr of nums as string;
  for (let i = 0; i < arr.length; i++) {
    // parse them to num
    let el = Number(arr[i]);

    // sum only the even;
    if (el % 2 == 0) {
      sum += el;
    }
  }

  console.log(sum);

  // print total sum
}
sumEvenNums(['1', '2', '3', '4', '5', '6']); //12
