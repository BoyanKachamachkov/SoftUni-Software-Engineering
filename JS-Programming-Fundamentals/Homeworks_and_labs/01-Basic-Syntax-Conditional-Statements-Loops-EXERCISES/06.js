function solve(num1, num2) {
  let sum = 0;
  let print = '';
  for (let i = num1; i <= num2; i++) {
    sum += i;
    print += `${i} `;
  }
  console.log(print);
  console.log(`Sum: ${sum}`);
}
