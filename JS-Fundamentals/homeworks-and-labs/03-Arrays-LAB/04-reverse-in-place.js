function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let el = arr[i];
    let lastIndex = arr.length - i - 1;

    arr[i] = arr[lastIndex];
    arr[lastIndex] = el;
  }

  console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']); //e d c b a
