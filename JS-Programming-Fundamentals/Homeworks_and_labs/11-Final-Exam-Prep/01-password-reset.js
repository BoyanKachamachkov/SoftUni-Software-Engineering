function pwReset(input) {
    let password = input.shift();
    let command = input.shift();

    while (command != 'Done') {
        let tokens = command.split(' ');
        let action = tokens[0];

        switch (action) {
            case 'TakeOdd':
                let newRawPw = '';
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 != 0) {
                        newRawPw += `${password[i]}`;
                    }
                }
                password = newRawPw;
                console.log(password);
                break;

            case 'Cut':
                let idx = Number(tokens[1]);
                let length = Number(tokens[2]);

                let substring = password.substring(idx, idx + length);
                password = password.replace(substring, '');
                console.log(password);

                break;

            case 'Substitute':
                let oldValue = tokens[1];
                let newValue = tokens[2];
                if (password.includes(oldValue)) {
                    password = password.replace(
                        new RegExp(oldValue, 'g'),
                        newValue
                    );
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
pwReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done',
]);
console.log('---------');
pwReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done',
]);
