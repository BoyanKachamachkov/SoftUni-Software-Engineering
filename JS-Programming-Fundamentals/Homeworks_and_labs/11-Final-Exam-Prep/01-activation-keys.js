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

                let deletion = key.slice(startIdx,endIdx)
                key = key.replace(deletion, '')
                console.log(key);
                break;

            case 'Flip':
                break;

            case 'Contains':
                break;
        }

        command = input.shift();
    }
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
