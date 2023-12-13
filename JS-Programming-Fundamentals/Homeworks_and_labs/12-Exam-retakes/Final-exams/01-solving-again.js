function emailValidation(arr) {
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
            let tokens = command.split('GetDomain');
            let count = Number(tokens[1]);

            let substring = email.substring(email.lenght - count);
            console.log(substring);
        } else if (command.includes('GetUsername')) {
            if(!email.includes('@')){
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }else{
                let index = email.indexOf('@')
                let substring = email.substring(0,index)

                console.log(substring);
            }
        } else if (command.includes('Replace')) {
            let tokens = command.split('Replace')
            let char = tokens[1];

            email = email.split(char).join('-')
            console.log(email);


        } else if (command.includes('Encrypt')) {
        }
        command = arr.shift();
    }
}
emailValidation([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
]);
