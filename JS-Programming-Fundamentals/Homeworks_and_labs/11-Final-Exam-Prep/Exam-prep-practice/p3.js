function solve(input) {
    let champs = {};

    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [hero, hp, mp] = line.split(' ');
        hp = Number(hp);
        mp = Number(mp);

        champs[hero] = { hp, mp };
    }

    console.log(champs);

    let command = input.shift();
    while (command != 'End') {
        let [action, ...args] = command.split(' - ');

        console.log(`${action} --- ${args}`);

        switch (action) {
            case 'Heal':
                let hero = args[0];
                let healAmount = args[1];

                if (champs[hero].hp + healAmount > 100) {
                    healAmount = 100 - champs[hero].hp;
                    console.log(`${champs[hero]} healed for${healAmount} HP!`);
                }
                break;

            case 'Recharge':
                break;

            case 'TakeDamage':
                break;

            case 'CastSpell':
                break;
        }

        command = input.shift();
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);
