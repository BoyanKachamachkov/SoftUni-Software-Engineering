function secretChat(arr) {
    let msg = arr.shift();
    let command = arr.shift();

    while (command != 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens.shift();

        switch (action) {
            case 'InsertSpace':
                break;

            case 'Reverse':
                break;

            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];

                let parse = msg.split(match)
                parse.join(replacement)
                break;
        }

        command = arr.shift();
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);
