function secretChat(input) {
    let message = input.shift();

    while (input[0] != 'Reveal') {
        let line = input.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {
            case 'InsertSpace':
                break;
            case 'Reverse':
                break;
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = message.split(match); //V
                message = parts.join(replacement)

                console.log(parts);
                console.log(message);
                 
                break;
        }
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);
