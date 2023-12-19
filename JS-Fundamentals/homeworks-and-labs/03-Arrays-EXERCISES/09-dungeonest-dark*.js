function dungeon(arr) {
  let roomsInfo = arr[0];

  let rooms = roomsInfo.split('|');

  let health = 100;
  let coins = 0;
  let counterRooms = 0;

  for (let room of rooms) {
    let currentRoom = room.split(' ');

    let command = currentRoom[0];
    let number = Number(currentRoom[1]);

    if (command === 'potion') {
      counterRooms++;
      let newHp = health + number <= 100 ? number : 100 - health;
      health += newHp;
      console.log(`You healed for ${newHp} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === 'chest') {
      counterRooms++;
      coins += number;
      console.log(`You found ${number} coins.`);
    }

    if (command !== 'potion' && command !== 'chest') {
      counterRooms++;
      health -= number;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counterRooms}`);
        return;
      }
    }
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeon(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);

/*
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 coins.
You slayed snake.
You found 110 coins.
You've made it!
Coins: 120
Health: 65 */
