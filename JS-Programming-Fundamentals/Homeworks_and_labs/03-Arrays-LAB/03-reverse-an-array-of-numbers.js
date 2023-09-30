function solve(n, nums) {
  //new array
  let reversed = [];

  //use nums array in reverse and push to new
  for (let i = n - 1; i >= 0; i--) {
    reversed.push(nums[i]);
  }

  //print new array with join
  console.log(reversed.join(' '));
}
solve(3, [10, 20, 30, 40, 50]);
