function dates(input) {
    let text = input.shift();
    let pattern =
        /\b(?<day>\d{2})(?<separator>[/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm;

    let matches = text.matchAll(pattern);

    for (let match of matches) {
        // console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`); - if we did not name and use nums

        console.log(
            `Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`
        );
    }
}
dates([
    '13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016',
]);
