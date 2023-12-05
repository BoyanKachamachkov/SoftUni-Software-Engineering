function mu(rooms) {
    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;

    let commands = rooms.split('|');

    for (const room of commands) {
        let tokens = room.split(' ');
        let action = tokens[0];
        roomCount++;

        if (action == 'potion') {
            let amount = Number(tokens[1]);

            if (health + amount > 100) {
                amount = 100 - health;
                health += amount;
            } else {
                health += amount;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (action == 'chest') {
            let bitcoinFound = Number(tokens[1]);
            bitcoins += bitcoinFound;
            console.log(`You found ${bitcoinFound} bitcoins.`);
        } else {
            let damage = Number(tokens[1]);
            health -= damage;
            if (health > 0) {
                console.log(`You slayed ${action}`);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}"`);
}

mu('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
mu('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
