function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(sortedArr.join('\n'));
}
sorting(['alpha', 'beta', 'gamma']);
// sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
