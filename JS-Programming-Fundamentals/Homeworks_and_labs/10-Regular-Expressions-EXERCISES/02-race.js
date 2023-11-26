function race(arr) {
    // first line list of partic, sep by ,
    let names = arr.shift().split(', ');
    let results = {};
    names.forEach((name) => (results[name] = 0));

    let letterPattern = /[A-Za-z]/g;
    //    let letterPattern = /[a-z]/gi;  works the same as above with the flag "i" = case insensitive

    let digitPattern = /\d/g;

    let command = arr.shift();
    // while cycle until end of race
    while (command != 'end of race') {
        let letterMatches = command.match(letterPattern);
        let name = letterMatches.join('');

        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance;
        }

        command = arr.shift();
    }

    // we cannot sort object directly so we transform
    let sortedResult = Object.entries(results).sort((a,b) => b[1] - a[1])

    // nested array access [0] is our whole arr (name + distance), name is always firste lement, so it stays 0 for each
    console.log(`1st place: ${sortedResult[0][0]}`);
    console.log(`2nd place: ${sortedResult[1][0]}`);
    console.log(`3rd place: ${sortedResult[2][0]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
]);
