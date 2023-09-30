function reverse(count, numbers) {
  //create new arr
  let result = []; //empty array

  //reverse the elements
  //take count elemenrs from number
  for (let i = 0; i < count; i++) {
    result[count - 1 - i] = numbers[i];
  }
  console.log(result.join(' '));

  //print
}
reverse(3, [10, 20, 30, 40, 50]);
