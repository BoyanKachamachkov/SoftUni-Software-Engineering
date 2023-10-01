// Array Rotation
// Write a function that receives an array and the number of rotations you have to perform.
// Note: Depending on the number of rotations, the first element goes to the end.
// Print the resulting array elements separated by a single space.

function solve(arr, rotations) {
  //фор цикъл да минем масива
  //въртим цикъла колкото ротации имаме
  for (let i = 0; i < rotations; i++) {
    //на всяка врътка местим с шифт елемента на който сме, накрая
    let firstEl = arr.shift();
    arr.push(firstEl);
  }

  //принтираме рутирания масив с 1 спейс
  console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2); //32 61 21 51 47
solve([32, 21, 61, 1], 4); //32 21 61 1
solve([2, 4, 15, 31], 5); //4 15 31 2
