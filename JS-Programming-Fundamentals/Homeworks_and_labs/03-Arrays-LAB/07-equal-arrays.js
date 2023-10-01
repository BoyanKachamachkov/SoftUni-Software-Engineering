function solve(arr1, arr2) {
  //обхождам масив1 индекс по индекс и проверявам с инклудс дали всеки индекс е равен на същия в масив2
  //ако са идентични, събирам стойностите на първия масив и ги принтирам като сума

  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    //буферна променлива за конкретния индекс
    let curNum = arr1[i];

    if (arr2.includes(curNum)) {
      sum += Number(curNum);
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }

  console.log(`Arrays are identical. Sum: ${sum}`);
}
solve(['10', '20', '30'], ['10', '20', '30']); //Arrays are identical. Sum: 60
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']); //Arrays are not identical. Found difference at 2 index
