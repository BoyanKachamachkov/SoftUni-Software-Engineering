function mu(input) {
  let rooms = input.split('|');

  let hp = 100;
  let bitcoins = 0;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(' ');

    let tokens = room;
    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command == 'potion') {
      let hpBefore = hp;
      hp += num;

      if (hp > 100) {
        hp = 100;
      }
      console.log(`You healed for ${hp - hpBefore} hp.`);
      console.log(`Current health: ${hp} hp.`);
    } else if (command == 'chest') {
      bitcoins += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
      hp -= num;

      if (hp > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }

  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${hp}`);
}

// mu('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
mu('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
