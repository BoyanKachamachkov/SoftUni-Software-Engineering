function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let j = arr.length - 1 - [i]; //e/d/c
    let temp = arr[i];

    arr[i] = arr[j]; // a stava e na iteraciq 1 (koqto e s index 0)
    arr[j] = temp; //e stava a na iteraciq 1 (index 4)
  }

  console.log(arr.join(' '));
}
solve(['a', 'b', 'c', 'd', 'e']);
