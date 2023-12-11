function solve(arr) {
    let email = arr.shift();
    let command = arr.shift();

    while (command != 'Complete') {
        if (command.includes('Make Upper')) {
            email = email.toUpperCase();
            console.log(email);
        } else if (command.includes('Make Lower')) {
            email = email.toLowerCase();
            console.log(email);
        } else if (command.includes('GetDomain')) {
            let tokens = command.split(' ');
            let count = Number(tokens[1]);

            let domain = email.substring(email.length - count);
            console.log(domain);
        } else if (command.includes('Replace')) {
            let tokens = command.split(' ');
            let char = tokens[1];

            email = email.split(char).join('-');
            console.log(email);
        } else if (command.includes('GetUsername')) {
            if (!email.includes('@')) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                let idx = email.indexOf('@');
                let substring = email.slice(0, idx);

                console.log(substring);
            }
        } else if (command.includes('Encrypt')) {
            let asciiArr = [];

            for (let i = 0; i < email.length; i++) {
                let asciiValue = email.charCodeAt(i);
                asciiArr.push(asciiValue);
            }
            console.log(asciiArr.join(' '));
        }

        command = arr.shift();
    }
}
// solve([
//     'Mike123@somemail.com',
//     'Make Upper',
//     'GetDomain 3',
//     'GetUsername',
//     'Encrypt',
//     'Complete',
// ]);

// solve((["Another@Mail.com",
// "Make Lower",
// "GetUsername",
// "GetDomain 3",
// "Encrypt",
// "Complete"])
// )

solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
]);
