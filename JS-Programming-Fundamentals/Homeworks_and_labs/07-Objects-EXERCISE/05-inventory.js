function inventory(input) {
    // empty arr to save hero infos
    let heroData = [];

    for (let line of input) {
        let [heroName, heroLevel, items] = line.split(' / ');

        // Object for each hero data
        let hero = {
            name: heroName,
            level: heroLevel,
            items: items,
        };

        // push object to general arr
        heroData.push(hero);
    }

    // sort output by LEVEL in ASCENDING (a - b)
    let sortedHeroData = heroData.sort((a, b) => a.level - b.level);

    // print format
    for(let hero of sortedHeroData){

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items}`);
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
