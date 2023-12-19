function secretChat(input) {
    let msg = input.shift();
    let command = input.shift();

    while (command != 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens[0];
        command = input.shift();

        switch (action) {
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                msg = msg.split(match).join(replacement);
                break;
            case 'InsertSpace':
                let idx = Number(tokens[1]);
                let left = msg.slice(0, idx);
                let right = msg.slice(idx);
                msg = left + ' ' + right;
                break;
            case 'Reverse':
                let substring = tokens[1];
                let firstIdx = msg.indexOf(substring);

                if (firstIdx == -1) {
                    console.log('error');
                    continue;
                }
                let firstHalf = msg.slice(0, firstIdx);
                let secondHalf = msg.slice(firstIdx + substring.length);
                msg =
                    firstHalf +
                    secondHalf +
                    substring.split('').reverse().join('');
                break;
        }

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
