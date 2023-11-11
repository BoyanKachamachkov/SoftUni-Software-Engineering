function censoredWords(text, word) {

    let censored = text.replace(word, repeat(word))

    console.log(text);


}
censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");
