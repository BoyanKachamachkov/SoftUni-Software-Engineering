function pianist(input) {
    let n = Number(input.shift());

    let collection = {};

    // fill initial collection
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [piece, composer, key] = line.split('|');

        collection[piece] = { composer, key };
    }

    // manipulate collection with commands
    let command = input.shift();
    while (command != 'Stop') {
        let [action, piece, composer, key] = command.split('|');

        switch (action) {
            case 'Add':
                if (piece in collection) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection[piece] = { composer, key };
                    console.log(
                        `${piece} by ${composer} in ${key} added to the collection!`
                    );
                }
                break;

            case 'Remove':
                if (piece in collection) {
                    delete collection[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;

            case 'ChangeKey':
                // 'ChangeKey|Moonlight Sonata|C# Major'
                if (piece in collection) {
                    collection[piece].key = composer; //with that command composer is the new key.
                    console.log(`Changed the key of ${piece} to ${composer}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;
        }

        command = input.shift();
    }

    console.log(collection);
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop',
]);
