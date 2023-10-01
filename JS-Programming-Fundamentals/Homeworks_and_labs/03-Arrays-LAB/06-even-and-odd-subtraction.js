function solve(arr) {
  //Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

  //буферни променливи за четни и нечетни ; и краен резултат
  let sumEven = 0;
  let sumOdd = 0;
  let result = 0;

  //обхождам масива;
  for (let i = 0; i < arr.length; i++) {
    //буферна променлива за конкретния индекс
    let curNum = arr[i]; // взимам числото на индекса

    if (curNum % 2 == 0) {
      //на всяка итерация с иф/елсе проверка добавям числото от конкретния индекс или към едната или към другата променлива
      sumEven += curNum;
    } else {
      sumOdd += curNum;
    }
  }
  result = sumEven - sumOdd;
  console.log(result);
  //накрая изваждам четните от нечетните и принтирам резултата
}
solve([1, 2, 3, 4, 5, 6]); //3 ---2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3
