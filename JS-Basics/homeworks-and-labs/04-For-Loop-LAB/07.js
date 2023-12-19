function sumOfNumbers(input) {
  let inputToString = input[0];
  inputToString = inputToString.toString();

  let sum = 0;

  for (let index = 0; index < inputToString.length; index++) {
    let currentIndex = Number(inputToString[index]);
    sum = sum + currentIndex;
  }

  console.log(`The sum of the digits is:${sum}`);
}
