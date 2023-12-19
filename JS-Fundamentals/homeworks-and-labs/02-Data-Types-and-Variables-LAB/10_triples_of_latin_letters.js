function triples(nAsString) {
  let n = Number(nAsString);

  let chars = 'abcdefghijklmnopqrstuvwxyz';

  for (let k = 0; k < n; k++) {
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        console.log(`${chars[k]}${chars[j]}${chars[i]}`);
      }
    }
  }
}
triples('3');
triples('10');
