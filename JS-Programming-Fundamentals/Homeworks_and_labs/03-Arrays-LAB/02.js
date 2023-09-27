function solve(n,nums){
  let reversed = [];
  
  for(let i=n-1; i >= 0; i--){
    reversed.push(nums[i])
  }

  console.log(reversed.join(' '));
}
solve(3, [10,20,30,40,50])