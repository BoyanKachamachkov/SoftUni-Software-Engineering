function pirates(arr) {
    let targets = {};
    let command = arr.shift();

    while (command != 'Sail') {
        let [city, population, gold] = command.split('||');

        if (city in targets) {
            targets[city].population += population;
        }

        if (city in targets) {
            targets[city].gold += gold;
        } else {
            targets[city] = { population, gold }; //create new city with obj as values
        }

        command = arr.shift();
    }

    command = arr.shift(); //prepare new command for 2nd cycle

    while (command != 'End') {
        let tokens = command.split('=>');
        let action = tokens.shift();

        if (action == 'Plunder') {
            let [city, people, gold] = tokens;
            people = Number(people);
            gold = Number(gold);

            targets[city].population -= people;
            targets[city].gold -= gold;

            console.log(
                `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );
            if (targets[city].population <= 0 || targets[city].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete targets[city];
            }
        } else {
        }

        command = arr.shift();
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
