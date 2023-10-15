function equalArrs(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];

    if (arr2.includes(el)) {
      sum = sum + Number(el);
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }

  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrs(['10', '20', '30'], ['10', '20', '30']);
