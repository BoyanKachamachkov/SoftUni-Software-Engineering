function worldTour(input) {
    let string = input.shift();
    let command = input.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');

        let action = tokens[0];

        switch (action) {
            case 'Add Stop':
                //take input
                let startIdx = Number(tokens[1]);
                let valueToAdd = tokens[2];
                //separate string, add middle, concat
                let leftPart = string.slice(0, startIdx);
                let rightPart = string.slice(startIdx);
                string = leftPart + valueToAdd + rightPart;
                console.log(string);
                break;

            case 'Remove Stop':
                //take input
                let start = Number(tokens[1]);
                let end = Number(tokens[2]);
                if (start < 0 || end >= string.length) {
                    console.log(string);
                    break;
                }
                //find substring to remove (add +1 to include last letter), remove it with replace
                let substring = string.substring(start, end + 1);
                string = string.replace(substring, '');
                console.log(string);
                break;

            case 'Switch':
                //take input
                let oldValue = tokens[1];
                let newValue = tokens[2];
                let pattern = new RegExp(oldValue, 'g');

                string = string.replace(pattern, newValue);
                console.log(string);

                break;
        }

        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${string}`);
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel',
]);

// worldTour([
//     'Albania:Bulgaria:Cyprus:Deuchland',
//     'Add Stop:3:Nigeria',
//     'Remove Stop:4:8',
//     'Switch:Albania: Azərbaycan',
//     'Travel',
// ]);
