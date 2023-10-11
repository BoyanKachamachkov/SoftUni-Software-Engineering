function solve(arr) {
  let result = [];

  // for each element
  // - check if current number is negative
  // -- if yes, add to begin
  // -- otherwise, add to end

  for (let numAsString of arr) {
    let num = Number(numAsString);

    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  //print

  for (let num of result) {
    {
      console.log(num);
    }
  }
}
solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);
