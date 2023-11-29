function activationKeys(input) {
    let key = input.shift();
    let command = input.shift();

    while (command != 'Generate') {
        let tokens = command.split('>>>');
        let action = tokens[0];

        switch (action) {
            case 'Slice':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);

                let deletion = key.slice(startIdx, endIdx); //copy of what we ll delete
                key = key.replace(deletion, ''); //replace those elems with nothing == delete
                console.log(key);
                break;

            case 'Flip':
                let casing = tokens[1];
                let start = Number(tokens[2]);
                let end = Number(tokens[3]);

                let part = key.substring(start, end); //copy part of the string
                let newPart =
                    casing == 'Upper' ? part.toUpperCase() : part.toLowerCase(); //transfer it based on casing with ternary operator

                key = key.replace(part, newPart);
                console.log(key);

                break;

            case 'Contains':
                let substring = tokens[1];

                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}.`);
                } else {
                    console.log('Substring not found!');
                }
                break;
        }

        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}

activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate',
]);

// activationKeys(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])
