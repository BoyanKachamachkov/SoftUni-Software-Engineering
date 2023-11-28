function secretChat(input) {
    let msg = input.shift();

    let command = input.shift();

    while (command != 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens[0];

        switch (action) {
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = msg.split(match);
                msg = parts.join(replacement);
                break;

            case 'Reverse':
                let substring = tokens[1];
                let firstIndex = msg.indexOf(substring);

                if (firstIndex == -1) {
                    console.log('error');
                    continue;
                }

                let left = msg.slice(0, firstIndex);
                let right = msg.slice(firstIndex + substring.length);
                msg = left + substring.split('').reverse().join('');

                break;

            case 'InsertSpace':
                let index = Number(tokens[1]);
                let firstHalf = msg.slice(0, index);

                let secondHalf = msg.slice(index);
                msg = firstHalf + ' ' + secondHalf;

                break;
        }
        command = input.shift();
        console.log(msg);
    }
    console.log(`You have a new text message: ${msg}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);
