function heroes(input) {
    let n = Number(input.shift());
    let party = {};

    for (let i = 0; i < n; i++) {
        let heroData = input.shift();
        let [name, hp, mp] = heroData.split(' ');

        //obj for hp and mp that will be value for the name
        let hero = {
            hp: Number(hp),
            mp: Number(mp),
        };

        party[name] = hero; //nested obj names are keys and values are other obj that contains (HP MP)
    }

    while (input[0] != 'End') {
        let line = input.shift();
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let hero = party[name];

        switch (command) {
            case 'Heal':
                let hpToRestore = Number(tokens[2]);
                if (hpToRestore + hero.hp > 100) {
                    //it will be lowered if its above ceiling
                    hpToRestore = 100 - hero.hp;
                }
                hero.hp += hpToRestore;
                console.log(`${name} healed for ${hpToRestore} HP!`);
                break;

            case 'Recharge':
                let mpToRestore = Number(tokens[2]);
                if (mpToRestore + hero.mp > 200) {
                    mpToRestore = 200 - hero.mp;
                }
                hero.mp += mpToRestore;
                console.log(`${name} recharged for ${mpToRestore} MP!"`);
                break;

            case 'CastSpell':
                let mpCost = Number(tokens[2]);
                let spellName = tokens[3];
                if (hero.mp >= mpCost) {
                    hero.mp -= mpCost;
                    console.log(
                        `${name} has successfully cast ${spellName} and now has ${hero.mp} MP!"`
                    );
                } else {
                    console.log(
                        `${name} does not have enough MP to cast ${spellName}!`
                    );
                }
                break;

            case 'TakeDamage':
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                hero.hp -= damage;
                if (hero.hp > 0) {
                    console.log(
                        `${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
                    )
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete party[name];
                }
                break;
        }
    }

    for(let name in party){
        let hero = party[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);

heroes([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
]);
