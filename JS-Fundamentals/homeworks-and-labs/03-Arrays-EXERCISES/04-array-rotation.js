function solve(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }

  console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
