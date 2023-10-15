function evenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if (el % 2 == 0) {
      sumEven += el;
    } else {
      sumOdd += el;
    }
  }

  console.log(sumEven - sumOdd);
}

evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
