// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.
// If there are NO elements to the left/right, their sum is 0.
// Print the index that satisfies the required condition or "no" if there is no such index.

function solve(arr) {
  //цикъл на масива
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = i + 1; j < arr.length; j++) {
      let goRight = arr[j];
      let goLeft = arr[i - 1];

      sumLeft += goLeft;
      sumRight += goRight;
    }
  }
  //две променили за сумата в ляво и дясно като на всяка итерация проверяваме всички елементи в 2-те посоки от индекса на който се намираме

  //принтираме индекса на който това е истина или не, ако няма такъв
}
solve([1, 2, 3, 3]); //2 At a[2] -> left sum = 3, right sum = 3  ;;; a[0] + a[1] = a[3]
