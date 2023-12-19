// As output, you should print the resulting third array, each element separated by " - ".

function merger(arr1, arr2) {
  let mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    // • If the index of the element is even, add into the third array the sum of both elements at that index
    if (i % 2 == 0) {
      mergedArr.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      // • If the index of the element is odd, add the concatenation of both elements at that index
      mergedArr.push(arr1[i] + arr2[i]);
    }
  }

  console.log(mergedArr.join(' - '));
}
merger(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

//22 - 1522 - 110 - 5636 - 46
