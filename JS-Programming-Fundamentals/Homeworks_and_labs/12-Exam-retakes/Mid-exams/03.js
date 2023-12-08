function solve(arr) {
    let originalDeck = arr.shift().split(':');
    let deck = [];
    let command = arr.shift();

    while (command != 'Ready') {
        let tokens = command.split(' ');
        let action = tokens[0];

        switch (action) {
            case 'Add':
                let cardName = tokens[1];
                if (originalDeck.includes(cardName)) {
                    deck.push(cardName);
                } else {
                    console.log('Card not found.');
                }
                break;

            case 'Insert':
                let card = tokens[1];
                let idx = Number(tokens[2]);

                if (
                    originalDeck.includes(card) &&
                    idx >= 0 &&
                    idx < deck.length
                ) {
                    deck.unshift(card);
                } else {
                    console.log('Error!');
                }

                break;

            case 'Remove':
                let cardd = tokens[1];
                if (deck.includes(cardd)) {
                    let idx = deck.indexOf(cardd);
                    deck.splice(idx, 1);
                } else {
                    console.log('Card not found.');
                }

                break;

            case 'Swap':
                let card1 = tokens[1];
                let card2 = tokens[2];

                let idx1 = deck.indexOf(card1);
                let idx2 = deck.indexOf(card2);

                deck[idx1] = card2;
                deck[idx2] = card1;
                break;

            case 'Shuffle':
                deck = deck.reverse();

                break;
        }

        command = arr.shift();
    }

    console.log(deck.join(' '));
}

// solve([
//     'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
//     'Add Moonfire',
//     'Add Bite',
//     'Insert Claw 0',
//     'Swap Claw Moonfire',
//     'Remove Bite',
//     'Ready',
// ]);
solve([
    'Timetwister:CopyArtifact:Lifeweaver:TimeWalk',
    'Add UndergroundSea',
    'Add Timetwister',
    'Remove Wrath',
    'Add CopyArtifact',
    'Shuffle deck',
    'Ready',
]);

// solve([
//     'BlackLotus:Bite:Innervate:Moonfire:CopyArtifact',
//     'Add BlackLotus',
//     'Insert Claw 1',
//     'Add Moonfire',
//     'Add Bite',
//     'Ready',
// ]);
