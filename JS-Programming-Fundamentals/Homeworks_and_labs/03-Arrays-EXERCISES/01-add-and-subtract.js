function solve(arr) {
  //приготвяме нов празен масив
  let newArr = [];
  let originalArrSum = 0;
  let newArrSum = 0;

  //обхождам цикъла
  for (let i = 0; i < arr.length; i++) {
    //буферна променлива за моментното число
    let curNum = arr[i];

    if (curNum % 2 == 0) {
      originalArrSum += curNum;
      //ако числото е четно + индекса на който се намираме
      curNum += i;
      newArr.push(curNum);
      newArrSum += curNum;
    } else {
      originalArrSum += curNum;
      //ако числото е нечетно - индекса на който се намираме
      curNum -= i;
      newArr.push(curNum);
      newArrSum += curNum;
    }
    //на всяка итерация ПУШВАМЕ числото към новия ни масив
  }

  //принтираме новия масив
  console.log(newArr);
  //принтираме сумата на оригиналния масив;
  console.log(originalArrSum);
  //принтираме сумата на модифицирания масив
  console.log(newArrSum);
}

// solve([5, 15, 23, 56, 35]);
// //[ 5, 14, 21, 59, 31 ]
// // 134
// // 130

solve([-5, 11, 3, 0, 2]);
