function modernTimes(text) {
    let words = text.split(' ');

    let hashWords = words.filter((w) => w.startsWith('#') && w.length > 1); //remove 1 char words

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                //we test all chars of the word with REGEX
                isValid = false;
                break;
            }
        }

        //if isValid is still true after the inner cycle, we can print it
        if (isValid) {
            console.log(word);
        }
    }
}

// modernTimes(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
// );
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
