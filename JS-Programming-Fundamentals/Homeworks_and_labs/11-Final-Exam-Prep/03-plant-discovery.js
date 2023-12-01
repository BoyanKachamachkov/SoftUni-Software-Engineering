function plant(input) {
    let plantCount = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = { rarity: Number(rarity), ratings: [] };
    }

    console.log(plants);

    let command = input.shift();
    while (command != 'Exhibition') {
        // tokens here
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        switch (commandName) {
            case 'Rate':
                let rating = Number(argument);
                plants[plantName].ratings.push(rating);

                break;

            case 'Update':
                let rarity = Number(argument);
                plants[plantName].rarity = rarity;
                break;

            case 'Reset':
                break;
        }

        command = input.shift();
    }

    console.table(plants);
}

plant([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition',
]);
