function inventory(input) {
    let register = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');

        // create object with a few chars on ever iteration for each hero
        let hero = {
            name: name,
            level: level,
            items: items,
        };

        // push the object to our array holder on each iteration
        register.push(hero);
    }

    let sortedReg = register.sort((a, b) => a.level - b.level);

    for (let hero of sortedReg) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);

// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])
