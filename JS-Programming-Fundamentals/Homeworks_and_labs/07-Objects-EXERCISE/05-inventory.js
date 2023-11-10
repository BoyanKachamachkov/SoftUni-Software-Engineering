function inventory(input) {
  let result = [];

  // work with input
  // iterate
  for (const line of input) {
    let [name, level, items] = line.split(" / ");

    // store data name->string, level->number, items->strings
    let hero = {
      name: name,
      level: Number(level),
      items: items,
    };

    result.push(hero);
  }

  // sort output by LEVEL(num) in ASC
  let sortedResult = result.sort((a, b) => a.level - b.level);

  for (const heroObject of sortedResult) {
    console.log(`Hero: ${heroObject.name}`);
    console.log(`level => ${heroObject.level}`);
    console.log(`items => ${heroObject.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])
