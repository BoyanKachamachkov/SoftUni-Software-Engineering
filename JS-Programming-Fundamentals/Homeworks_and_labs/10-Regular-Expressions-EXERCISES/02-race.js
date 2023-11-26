function race(arr) {
    let names = arr.shift().split(', ');
    // console.log(names);
    let results = {};
    names.forEach((name) => (results[name] = 0));
    // console.log(results);

    let letterPattern = /[A-Z[a-z]/g;
    let digitPattern = /\d/g;

    let command = arr.shift();
    // console.log(command);

    while (command != 'end of race') {
        let letterMatch = command.match(letterPattern);
        let name = letterMatch.join('');

        let digitMatch = command.match(digitPattern);

        let distance = digitMatch.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance;
        }

        command = arr.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

   console.log(`1st place: ${sortedResults[0][0]}`);
   console.log(`2nd place: ${sortedResults[1][0]}`);
   console.log(`3rd place: ${sortedResults[2][0]}`);
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
