function searchNumber(arr1, arr2) {
  let [elsTake, elsDelete, elSearch] = arr2;

  let result = [];

  for (let i = 0; i < elsTake; i++) {
    let el = arr1[i];
    result.push(el);
  }

  result.splice(0, elsDelete);

  let occurances = result.reduce(
    (count, element) => count + (element === elSearch ? 1 : 0),
    0
  );

  console.log(`Number ${elSearch} occurs ${occurances} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]); //Number 3 occurs 1 times. (correct)
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]); //Number 5 occurs 5 times. (incorrect but its my output from the reduce)  vs. Number 5 occurs 1 times (correct)
