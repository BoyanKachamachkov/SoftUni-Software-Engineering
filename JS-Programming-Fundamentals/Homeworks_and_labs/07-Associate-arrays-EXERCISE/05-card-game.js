//proper structure {name: [arr with all cards]}
function cardGame(arr) {
  let playersCards = {};

  let powerValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let typeValues = { S: 4, H: 3, D: 2, C: 1 };

  for (const playerDeck of arr) {
    let [playerName, cardsStr] = playerDeck.split(": "); //split 2 parts, name + deck as string

    cards = cardsStr.split(", "); // string into array

    if (playerName in playersCards) {
      // for exsisting player
      playersCards[playerName].push(...cards); //break the array cards into els and push them 1by1
    } else {
      //for new player, we just add him to obj and take his cards
      playersCards[playerName] = cards;
    }
  }

  //create arr from obj to loop it
  let entries = Object.entries(playersCards);

  for (const [name, deck] of entries) {
    let uniqueCards = new Set(deck); //take only the unique cards
    let deckValue = 0;

    for (let card of uniqueCards) {
      let power = card.slice(0, card.length - 1); //take 1 or 2 symbols at beginning, so it can work with 1 and 10, for example.
      let type = card[card.length - 1]; //always take the last symbol

      let cardValue = powerValues[power] * typeValues[type];
      deckValue += cardValue;
    }

    console.log(`${name}: ${deckValue} `);
  }
}

// cardGame([
//   "Peter: 2C, 4H, 9H, AS, QS",
//   "Tomas: 3H, 10S, JC, KD, 5S, 10S",
//   "Andrea: QH, QC, QS, QD",
//   "Tomas: 6H, 7S, KC, KD, 5S, 10C",
//   "Andrea: QH, QC, JS, JD, JC",
//   "Peter: JD, JD, JD, JD, JD, JD",
// ]);

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
