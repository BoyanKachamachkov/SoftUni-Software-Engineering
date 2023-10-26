function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  // if a.length - b.length gives 0 -> falsy value, then we evaluate the 2nd condition, and if its true, it will sort by it. In this case this is the localeCompare condition
  // if we have left 0 and right 0 then we move to 2nd criteria (localeCompare)
  // take a and compare it to b in alphabetical order(localeCompare)
  // "щом дължината е еднаква, ще гледам азбучния ред" с 1 изречение

  console.log(sortedArr.join('\n'));
}
sorting(['alpha', 'beta', 'gamma']);
// sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
