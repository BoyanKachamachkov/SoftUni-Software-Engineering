function bombNumbers(nums, bombInfo) {
  let [bombNum, power] = bombInfo;
  // let bombNum = Number(bombInfo[0]);
  // let power = Number(bombInfo[1]);

  while (nums.includes(bombNum)) {
    let idx = nums.indexOf(bombNum); //we need the index of the BOMB to remove around it
    nums.splice(
      Math.max(0, idx - power),
      Math.min(power * 2 + 1, 0, nums.length - 1)
    ); //we add 0 (not needed), it wont move the sum, but it will keep the indexes
    // math max takes care if our starting point goes below zero.
    // splice takes up till last index, so no errors, but we should fix the end of the array with Math.min. Then we for sure stay within the actual array indexes.
  }

  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
