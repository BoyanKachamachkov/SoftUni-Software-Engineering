function negativeAndPositive(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = Number(arr[i]);

    if (current < 0) {
      result.unshift(current);
    } else {
      result.push(current);
    }
  }

  for (let num of result) {
    console.log(num);
  }
}
negativeAndPositive(['7', '-2', '8', '9']);
negativeAndPositive(['3', '-2', '0', '-1']);
