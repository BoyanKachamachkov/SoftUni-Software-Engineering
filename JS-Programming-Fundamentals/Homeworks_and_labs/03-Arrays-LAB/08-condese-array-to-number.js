function condense(arr) {
  let condensed = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      // we stop 2 els before the end(1 due to index , 1 due to taking 2 at a time)
      let curNum = arr[i] + arr[i + 1];

      condensed.push(curNum);
    }
    arr = condensed;
    condensed = [];
  }

  console.log(arr.join());
}
condense([2, 10, 3]);
