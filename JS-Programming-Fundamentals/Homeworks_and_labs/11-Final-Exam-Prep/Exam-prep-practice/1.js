function chat(input) {
    let message = input.shift();

    let command = input.shift();
    while (command != 'Reveal') {
        let [action, ...args] = command.split(':|:');

        switch (action) {
            case 'ChangeAll':
                let letterToChange = args[0];
                let newLetter = args[1];

                message = message.split(letterToChange).join(newLetter);
                console.log(message);
                break;

            case 'Reverse':
                let substring = args[0];

                let indexOfSubstring = message.indexOf(substring);
                let leftPart = message.substring(0, indexOfSubstring);
                let rightPart = message.slice(
                    indexOfSubstring,
                    substring.length
                );

                if (indexOfSubstring == -1) {
                    console.log('error');
                    command = input.shift();
                    continue;
                }

                message =
                    leftPart +
                    rightPart +
                    substring.split('').reverse().join('');
                console.log(message);

                break;

            case 'InsertSpace':
                let index = Number(args[0]);

                let left = message.slice(0, index);
                let right = message.slice(index);
                message = left + ' ' + right;
                console.log(message);
                break;
        }

        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
chat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);
