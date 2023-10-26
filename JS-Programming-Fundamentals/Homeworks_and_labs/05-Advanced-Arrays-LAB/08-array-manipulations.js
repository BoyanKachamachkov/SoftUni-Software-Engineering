function arrayManipulator(input) {
  let nums = input.shift().split(' ').map(Number); //взимаме си първия елемент от инпута, правим го на масив, защото е стринг, и го трансформираме в число, за да е удобно за ползване. Сега в инпута са ни останали команди и числа.

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' ');
    let action = tokens.shift();

    if (action == 'Add') {
      let number = Number(tokens.shift());
      nums.push(number); //push 3
    } else if (action == 'Remove') {
      let number = Number(tokens.shift());
      nums = nums.filter((x) => x !== number);
    } else if (action == 'RemoveAt') {
      let index = Number(tokens.shift());
      nums.splice(index, 1);
    } else if (action == 'Insert') {
      let number = Number(tokens.shift());
      let index = Number(tokens.shift());

      nums.splice(index, 0, number);
    }
  }
  console.log(nums.join(' '));
}
arrayManipulator([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
]);
