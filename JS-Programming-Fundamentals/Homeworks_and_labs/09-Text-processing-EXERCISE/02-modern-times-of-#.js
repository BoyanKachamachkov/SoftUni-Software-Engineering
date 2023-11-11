function modernTimes(text) {
    let words = text.split(' ');
    console.log(words);

    let hashWords = words.filter((w) => w.startsWith('#') && w.length > 1); //remove 1 char words
    console.log(hashWords);

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(word);
        }
    }
}

// modernTimes(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
// );
modernTimes('Nowadays everyone uses # to tag a #special123214 word in #socialMedia');
