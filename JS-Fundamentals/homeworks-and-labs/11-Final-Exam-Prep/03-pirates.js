function pirates(input) {
    let targets = {};

    let command = input.shift();
    while (command != 'Sail') {
        let [town, pop, gold] = command.split('||');
        pop = Number(pop);
        gold = Number(gold);

        if (town in targets) {
            targets[town].pop += pop;
            targets[town].gold += gold;
        } else {
            targets[town] = { pop, gold };
        }

        command = input.shift();
    }

    command = input.shift();
    while (command != 'End') {
        let [action, town, pop, gold] = command.split('=>');
        pop = Number(pop);
        gold = Number(gold);

        switch (action) {
            case 'Plunder':
                console.log(
                    `${town} plundered! ${gold} gold stolen, ${pop} citizens killed.`
                );
                targets[town].gold -= gold;
                targets[town].pop -= pop;
                if (targets[town].pop <= 0 || targets[town].gold <= 0) {
                    delete targets[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

            case 'Prosper':
                let newGold = pop;
                if (newGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    command = input.shift();
                    continue;
                } else {
                    targets[town].gold += newGold;
                    console.log(
                        `${newGold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`
                    );
                }
                break;
        }
        command = input.shift();
    }

    let entries = Object.entries(targets); //its length

    if (entries.length == 0) {
        console.log(
            'Ahoy, Captain! All targets have been plundered and destroyed!'
        );
    } else {
        console.log(
            `Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`
        );
        entries.forEach((entry) =>
            console.log(
                `${entry[0]} -> Population: ${entry[1].pop} citizens, Gold: ${entry[1].gold} kg`
            )
        );
    }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End',
]);

// pirates([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End',
// ]);
