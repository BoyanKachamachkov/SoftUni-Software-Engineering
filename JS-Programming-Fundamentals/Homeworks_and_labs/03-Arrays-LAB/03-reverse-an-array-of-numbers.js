function reversed(n, nums) {
  let reversed = [];

  for (let i = n - 1; i >= 0; i--) {
    reversed.push(nums[i]);
  }

  console.log(reversed.join(' '));
}
reversed(2, [66, 43, 75, 89, 47]);
