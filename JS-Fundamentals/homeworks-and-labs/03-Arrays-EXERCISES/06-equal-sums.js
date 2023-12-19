function solve(arr) {
  let result = 'no';

  if (arr.length == 1) {
    console.log('0');
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let k = i + 1; k < arr.length; k++) {
      sumRight += arr[k];
    }

    for (let j = 0; j < i; j++) {
      sumLeft += arr[j];
    }

    if (sumLeft == sumRight) {
      result = i;
      break;
    }
  }

  console.log(result);
}
solve([1, 2, 3, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
