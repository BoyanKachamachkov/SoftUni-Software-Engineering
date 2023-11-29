function worldTour(input) {
    let locs = input.shift();
    let command = input.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');

        let action = tokens[0];

        switch (action) {
            case 'Add Stop':
                let idx = Number(tokens[1]);
                if (idx < 0 || idx >= locs.length) {
                    console.log(locs);
                    break;
                }
                let city = tokens[2];

                let left = locs.slice(0, idx);
                let right = locs.slice(idx);
                locs = left + city + right; //concat 3 parts
                console.log(locs);
                break;

            case 'Remove Stop':
                let startIdx = Number(tokens[1]);
                let endIdx = Number(tokens[2]);

                if (!locs[startIdx] || !locs[endIdx]) {
                    console.log(locs);
                    break;
                }
                let deletionPart = locs.slice(startIdx, endIdx + 1);

                locs = locs.replace(deletionPart, '');
                console.log(locs);

                break;

            case 'Switch':
                let old = tokens[1];
                let newOne = tokens[2];
                let pattern = new RegExp(old, 'g');

                locs = locs.replace(pattern, newOne);
                console.log(locs);

                break;
        }

        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${locs}`);
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
