function solve(input) {
    let spell = input.shift();
    let command = input.shift();

    while (command != 'Abracadabra') {
        let tokens = command.split(' ');

        let action = tokens[0];
        switch (action) {
            case 'Illusion':
                let idx = Number(tokens[1]);
                let curLetter = spell[idx];
                let letter = tokens[2];

                if (idx < 0 || idx >= spell.length) {
                    console.log('The spell was too weak.');
                } else {
                    spell = spell.split(curLetter).join(letter);
                    console.log('Done!');
                }
                break;

            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;

            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;

            case 'Divination':
                let substring = tokens[1];
                let replacement = tokens[2];

                if (spell.includes(substring)) {
                    spell = spell.split(substring).join(replacement);
                    console.log(spell);
                } else {
                    command = input.shift();
                    continue;
                }
                break;

            case 'Alteration':
                let str = tokens[1];

                let index = spell.indexOf(str);
                let left = spell.slice(0, index);
                let right = spell.slice(index + str.length);

                if (index == -1) {
                    console.log('The spell did not work!');
                    command = input.shift();
                    continue;
                } else {
                    spell = left + right;
                    console.log(spell);
                }
                break;
        }

        command = input.shift();
    }
}

solve([
    'SwordMaster',
    'Target Target Target',
    'Abjuration',
    'Necromancy',
    'Alteration master',
    'Abracadabra',
]);
