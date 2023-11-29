function activationKeys(input) {
    let activationKey = input.shift();
    let instruction = input.shift();

    while (instruction != 'Generate') {
        let arguments = instruction.split('>>>');
        let instructionName = arguments[0];

        switch (instructionName) {
            case 'Slice':
                let start = Number(arguments[1]);
                let end = Number(arguments[2]);

                let toDelete = activationKey.slice(start,end);
                activationKey = activationKey.replace(toDelete, '');
                console.log(activationKey);

                break;

            case 'Flip':
                let casing = arguments[1];
                let startIndex = Number(arguments[2]);
                let endIndex = Number(arguments[3]);

                // let part = activationKey.slice(startIndex, endIndex);
                let part = activationKey.substring(startIndex, endIndex)
                let newPart =
                    casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part, newPart);
                console.log(activationKey);
                break;

            case 'Contains':
                let substring = arguments[1];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
        }

        instruction = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
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
