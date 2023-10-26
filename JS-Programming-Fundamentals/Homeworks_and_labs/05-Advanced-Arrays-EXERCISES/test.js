let nums = [1, 3, 5, 55, 0];

nums.sort((a, b) => a - b); //[0, 1, 3, 5, 55] - ASCENDING
console.log(nums);

nums.sort((a, b) => b - a); //[55, 5, 3, 1, 0] - DESCENDING
console.log(nums);
