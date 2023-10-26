function houseParty(arr) {
  let guests = [];

  for (let command of arr) {
    let tokens = command.split(' ');
    let name = tokens[0];

    if (tokens.includes('not')) {
      if (guests.includes(name)) {
        let index = guests.indexOf(name);
        guests.splice(index, 1); //we remove 1 el at INDEX in guest ARR
      } else {
        console.log(`${name} is not on the list!`);
      }
    } else {
      if (guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guests.push(name);
      }
    }
  }
  console.log(guests.join(' '));
}
houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!',
]);
