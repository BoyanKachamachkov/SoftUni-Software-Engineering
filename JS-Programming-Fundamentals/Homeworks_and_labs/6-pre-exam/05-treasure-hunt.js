function treasureHunt(arr) {
  let loot = arr.shift().split('|');
  let command = arr.shift();

  while (command != 'Yohoho!') {
    let tokens = command.split(' ');
    let action = tokens.shift();

    if (action == 'Loot') {
      // ot 3-te itema ostanali shte vkaravm v masiwa LOOT samo teq koito gi nqma currently (filtrirame teq tokeni ostanali)

      // s for each gi pushvame v nachaloto i unshift na masiva loot
      tokens
        .filter((item) => !loot.includes(item))
        .forEach((item) => loot.unshift(item));

      // variant 2
      // for (let item of items) {
      //   loot.unshift(item);
      // }
    } else if (action == 'Drop') {
      let idx = Number(tokens.shift());

      if (idx >= 0 && idx < loot.length) {
        // samo togawa e validen indexa

        // triem item sus splice na mqstoto na indexa i go returnvame s shift shtoto shte go pushnem nakraq
        let removedItem = loot.splice(idx, 1).shift();
        loot.push(removedItem);
      }
    } else if (action == 'Steal') {
      let count = Number(tokens.shift());
      let removedItems = loot.splice(-count);
      console.log(removedItems.join(', '));
    }

    command = arr.shift();
  }

  if (loot.length == 0) {
    console.log(`Failed treasure hunt.`);
  } else {
    let totalGain = 0;
    for (let item of loot) {
      totalGain += item.length;
    }

    let avg = totalGain / loot.length; //ako loot ima 5 itema, she e 5 loot length

    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  }
}
// treasureHunt([
//   'Gold|Silver|Bronze|Medallion|Cup',
//   'Loot Wood Gold Coins',
//   'Loot Silver Pistol',
//   'Drop 3',
//   'Steal 3',
//   'Yohoho!',
// ]);

treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
