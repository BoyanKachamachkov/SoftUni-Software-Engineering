function mu(rooms) {
    let health = 100;
    let bitcoin = 0;

    let commands = rooms.split('|');

    for (const room of commands) {
        let tokens = room.split(' ');
        let action = tokens[0];
        let roomCount = 0;
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
            console.log(`You found ${bitcoinFound} bitcoins.`);
        } else {
            let damage = Number(tokens[1])
            health -= damage;
            if(health > 0){
                console.log(`You slayed ${action}`);
            }else{
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCount}`);
            }
        }
        
    }
}

mu('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
