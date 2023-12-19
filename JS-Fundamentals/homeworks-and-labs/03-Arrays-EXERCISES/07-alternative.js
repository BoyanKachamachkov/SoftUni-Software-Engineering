function solve(arr) {
  let longestSequence = [];
  let leftmostIndex = 0;

  //create a for loop to split the array:
  for (let i = 0; i < arr.length; i++) {
    let currentElement = Number(arr[i]);
    //separate each element into a new array:
    let currentSequence = [currentElement];

    //create a nested for loop to check for equal elements:
    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = Number(arr[j]);
      if (nextElement === currentElement) {
        currentSequence.push(nextElement);
      } else {
        break;
      }
    }
    if (currentSequence.length > longestSequence.length) {
      longestSequence = [];
      for (let j = 0; j < currentSequence.length; j++) {
        longestSequence.push(currentSequence[j]);
      }
    } else if (currentSequence.length === longestSequence.length) {
      if (i < leftmostIndex) {
        leftmostIndex = i;
      }
    }
  }
  console.log(longestSequence.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
