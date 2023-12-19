function max(arr) {
  let topIntegersArr = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (num > arr[j]) {
      } else {
        isTop = false;
      }
    }

    if (isTop) {
      topIntegersArr.push(num);
    }
  }

  console.log(topIntegersArr.join(' '));
}
max([14, 24, 3, 19, 15, 17]); //24 19 17
