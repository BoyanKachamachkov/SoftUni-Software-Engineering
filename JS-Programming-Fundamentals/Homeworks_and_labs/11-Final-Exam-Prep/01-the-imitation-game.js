function game(arr) {
    // parse input
    // loop commands until decode
    // -perform operations for each command

    let message = arr.shift();

    let command = arr.shift();

    while (command != 'Decode') {
        let tokens = command.split('|');
        let action = tokens[0];

        switch (action) {
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];

                let parts = message.split(match); //split by what we want to remove
                message = parts.join(replacement); //join with replacement
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];

                let left = message.slice(0, index);
                let right = message.slice(index);
                message = left + value + right;

                break;
            case 'Move':
                let n = Number(tokens[1]);
                let firstLetters = message.slice(0, n); //saved

                message = message.replace(firstLetters, ''); //way to remove n amount of symbols
                message += firstLetters;

                break;
        }

        command = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

game(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);

  game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);``
