function hogwarts(input) {
    let spell = input.shift();
    let command = input.shift();

    while (command != 'Abracadabra') {
        let tokens = command.split(' ');
        command = input.shift();
        let action = tokens[0];
        if (action == 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (action == 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (action == 'Illusion') {
            let idx = tokens[1];
            let curLetter = spell[idx];
            let letter = tokens[2];

            if (idx < 0 || idx >= spell.length) {
                console.log('The spell was too weak.');
            } else {
                spell = spell.split(curLetter).join(letter);
                console.log('Done!');
            }
        } else if (action == 'Divination') {
            let substring = tokens[1];
            let replacement = tokens[2];

            if (spell.includes(substring)) {
                spell = spell.split(substring).join(replacement);
                console.log(spell);
            }
        } else if (action == 'Alteration') {
            let str = tokens[1];
            let index = spell.indexOf(str);
            let left = spell.slice(0, index);
            let right = spell.slice(index + str.length);

            if (index == -1) {
                console.log('The spell did not work!');
            } else {
                spell = left + right + '';
                console.log(spell);
            }
        } else {
            console.log('The spell did not work!');
        }
    }
}

hogwarts(['SwordMaster', '-2', 'Abracadabra']);

// hogwarts([
//     'TR1GG3R',

//     'Necromancy',

//     'Illusion 8 m',

//     'Illusion 9 n',

//     'Abracadabra',
// ]);

hogwarts([
    'A7ci0',

    'Illusion 1 c',

    'Illusion 4 o',

    'Abjuration',

    'Abracadabra',
]);
