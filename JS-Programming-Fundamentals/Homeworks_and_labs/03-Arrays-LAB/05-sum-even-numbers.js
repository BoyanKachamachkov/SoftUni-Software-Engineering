function solve(arr) {
  //Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

  // буферна променлива за сума
  let sum = 0;

  // обхождам масива
  for (let i = 0; i < arr.length; i++) {
    // - временна променлива да държи числото на конкретната итерация, като също я преобразувам в число
    let curNum = Number(arr[i]);

    // - на всяка итерация проверявам дали числото е четно
    if (curNum % 2 == 0) {
      // - ако е четно, го добавям към сумата
      sum += curNum;
    }
  }
  console.log(sum);
  //принтирам резултата като число
}
solve(['1', '2', '3', '4', '5', '6']); //12
