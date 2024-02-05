function playingCards(face, suit) {
  // returs card obj that holds card face and suit
  // throw an error if card has invalid face
  // •	Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
  // •	Valid card suits are: S (♠), H (♥), D (♦), C (♣)

  let faces = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  let suits = ['S', 'H', 'D', 'C'];

  if (!faces.includes(face)) {
    throw new Error('Invalid face!');
  }
  if (!suits.includes(suit)) {
    throw new Error('Invalid suit!');
  }

  let suitToChar = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  };

  return {
    face,
    suit,
    toString() {
      return `${face}${suitToChar[suit]}`;
    },
  };
}

console.log(playingCards('A', 'S').toString()); // A♠
console.log('-----------------');
console.log(playingCards('10', 'H').toString()); // 10♥
console.log('-----------------');
console.log(playingCards('1', 'C').toString()); // Error
