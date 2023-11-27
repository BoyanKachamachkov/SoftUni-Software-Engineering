function race(arr) {
    let participants = arr.shift().split(', ');
    let results = {};
    participants.forEach((name) => (results[name] = 0));

    let command = arr.shift();
    let lettersPattern = /[A-Za-z]+/g;
    let distancePattern = /\d/gm;

    while (command != 'end of race') {
        let match = command.match(lettersPattern);

        let name = match.join('');
        let disMatch = command.match(distancePattern).map(Number);

        let distance = disMatch.reduce((acc, val) => acc + val);
        if (name in results) {
            results[name] += distance;
        }

        command = arr.shift();
    }

    let sortedEntries = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedEntries[0][0]}`);
    console.log(`2nd place: ${sortedEntries[1][0]}`);
    console.log(`3rd place: ${sortedEntries[2][0]}`);
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

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)