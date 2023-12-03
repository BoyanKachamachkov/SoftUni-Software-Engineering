function solve(string) {
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/gi;

    let match = pattern.exec(string);
    let mirrorWords = [];
    let counter = 0;

    while (match != null) {
        counter++;
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;

        if (word1 === word2.split('').reverse().join('')) {
            mirrorWords.push(`${word1} <=> ${word2}`);
        }

        match = pattern.exec(string);
    }
    if (counter == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if (mirrorWords.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
