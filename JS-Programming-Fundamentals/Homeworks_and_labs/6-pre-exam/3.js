function manoWar(input) {
  // parse input, removing elements
  // - split first two elements and create pirate ship and man-o-war status arrays
  // - parse max health from third element
  let pirate = input.shift().split('>').map(Number); //взимаме елемент 1 и го трием от масива
  let warship = input.shift().split('>').map(Number);
  let maxHp = Number(input.shift());
  let critical = maxHp * 0.2;

  for (let current of input) {
    // for each remaining element:
    // - parse current element
    // -- split element by ' '
    // -- first token is command, other tokens (if any) are numbers
    // - depending on element type, perform action:

    let tokens = current.split(' ');
    let command = tokens.shift();

    if (command == 'Retire') {
      // # Retire - stop processing

      break;
    } else if (command == 'Fire') {
      // # Fire -
      // - validate index
      // - damage man-o-war section
      // - if section is broken, pring message and stop execution
      let index = Number(tokens[0]);
      let damage = Number(tokens[1]);

      if (index < 0 || index >= warship.length) {
        continue;
      }

      warship[index] -= damage;
      if (warship[index] <= 0) {
        console.log(`You won! The enemy ship has sunken.`);
        return;
      }
    } else if (command == 'Defend') {
      // # Defend - damage pirate ship sections
      // - validate index
      let start = Number(tokens[0]);
      let end = Number(tokens[1]);
      let damage = Number(tokens[2]);

      if (
        start > 0 ||
        start >= pirate.length ||
        end < 0 ||
        end >= pirate.length
      ) {
        continue;
        // - damage pirate ship section
      }

      for (let i = start; i <= end; i++) {
        pirate[i] -= damage;

        if (pirate[i] <= 0) {
          console.log(`You lost! The pirate ship has sunken.`);
          return;
        }
      }

      // - if section is broken, pring message and stop execution
    }
    // # Status - print heavily damaged (hp < 20% max) sections
    else if (command == 'Repair') {
      // # Repair -
      // - validate index

      let index = Number(tokens[0]);
      let hp = Number(tokens[1]);

      if (index < 0 || index >= pirate.length) {
        continue;
      }

      pirate[index] += hp;
      if (pirate[index] > maxHp) {
        pirate[index] = maxHp;
      }

      // - increase section hp (without exceeding max)
    } else if (command == 'Status') {
      let damaged = pirate.filter((section) => section < critical);
      console.log(`${damaged.length} sections need repair.`);
    }
  }

  // print

  let pirateStatus = 0;
  let warshipStatus = 0;

  for (let section of pirate) {
    pirateStatus += section;
  }

  for (let section of warship) {
    warshipStatus += section;
  }
  console.log(`Pirate ship status: ${pirateStatus}`);
  console.log(`Warship status: ${warshipStatus}`);
}

manoWar([
  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire',
]);

manoWar([
  '2>3>4>5>2',
  '6>7>8>9>10>11',
  '20',
  'Status',
  'Fire 2 3',
  'Defend 0 4 11',
  'Repair 3 18',
  'Retire',
]);
