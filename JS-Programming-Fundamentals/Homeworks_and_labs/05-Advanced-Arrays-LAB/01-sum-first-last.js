function sumFirstLast(arr) {
  let first = arr.shift();
  let last = arr.pop();

  console.log(Number(first) + Number(last));
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
