function solve(nums) {
  let condensed = [];

  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1];
    }
    nums = condensed;
    condensed = [];
  }
  console.log(nums.join());
}
solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
