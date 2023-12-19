function mirrorWords(input) {
    // compose regexp
    // find all matches in a loop
    // for every match:
    //  - check if second word reversed matches the first
    // print result
    let result = [];
    let counter = 0;

    let pattern = /(@|#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gi;

    let match = pattern.exec(input);

    while (match != null) {
        counter++;
        let first = match.groups.word1;
        let second = match.groups.word2;

        if (first == second.split('').reverse().join('')) {
            result.push(`${first} <=> ${second}`);
        }

        match = pattern.exec(input);
    }
    if (counter == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (result.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
