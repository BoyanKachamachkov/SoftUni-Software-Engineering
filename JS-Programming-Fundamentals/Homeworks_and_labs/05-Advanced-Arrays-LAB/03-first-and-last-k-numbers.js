function firstLastK(arr) {
  let k = arr.shift();

  let start = arr.slice(0, k);
  let end = arr.slice(-k); //ot dqsno na lqvo 3 elementa

  console.log(start.join(' '));
  console.log(end.join(' '));
}
// firstLastK([2, 7, 8, 9]);
firstLastK([3, 6, 7, 8, 9]);
