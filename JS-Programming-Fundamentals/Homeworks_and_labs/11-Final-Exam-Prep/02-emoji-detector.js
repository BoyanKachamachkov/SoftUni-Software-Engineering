function emojiDetector(input) {
    // input
    let text = input.shift();
    let coolEmojis = [];

    // get all digits
    let digitsResults = text.matchAll(/\d/g);
    // calcualte threshhold
    let threshold = 1; //cant use 0, we ll multiply
    for (const digitResult of digitsResults) {
        let digit = Number(digitResult[0]);

        threshold *= digit;
    }
    // get all emojis

    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    let emojiCount = 0;

    for (let emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        emojiCount++;

        // calc emoji coolness
        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i);
        }

        if (emojiCoolness >= threshold) {
            coolEmojis.push(emoji);
        }
    }

    // print only cool emojis
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojis) {
        console.log(emoji);
    }
}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
