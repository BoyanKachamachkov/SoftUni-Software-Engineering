function commonEls(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let curEl = arr1[i];

    if (arr2.includes(curEl)) {
      console.log(curEl);
    }
  }
}

commonEls(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);

commonEls(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l']
);
