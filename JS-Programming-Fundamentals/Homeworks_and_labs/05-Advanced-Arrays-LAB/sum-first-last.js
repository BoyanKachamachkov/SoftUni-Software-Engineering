function sum(arr) {
  let first = arr.shift();
  let last = arr.pop();

  console.log(Number(first) + Number(last));
}

sum(['5', '10']);
sum(['20', '30', '40']);
