function pwReset(input) {
    let password = input.shift();
    let command = input.shift();

    while (command != 'Done') {
        let tokens = command.split(' ');
        let action = tokens[0];
        let newRawPw = '';

        switch (action) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 != 0) {
                        newRawPw += `${password[i]}`;
                    }
                }
                console.log(newRawPw);
                break;

            case 'Cut':
                let idx = Number(tokens[1]);
                let length = Number(tokens[2]);

                let substring = newRawPw.substring(idx, length)
                newRawPw = newRawPw.replace(substring, '')
                console.log(newRawPw);
                break;

            case 'Substitute':
                break;
        }
        command = input.shift();
    }
    // console.log(`Your password is: ${password}`);
}
pwReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done',
]);
// pwReset([
//     'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
//     'TakeOdd',
//     'Cut 15 3',
//     'Substitute :: -',
//     'Substitute | ^',
//     'Done',
// ]);
