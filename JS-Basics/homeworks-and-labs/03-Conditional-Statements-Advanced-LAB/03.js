function animalClass(input) {
  let animal = input[0];

  switch (animal) {
    case 'dog':
      console.log('mammal');
      break;

    case 'snake':
    case 'tortoise':
    case 'crocodile':
      console.log('reptile');
      break;

    case 'cat':
      console.log('unknown');
      break;
  }
}
