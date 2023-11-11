function revealWords(wordsStr, text) {
  let words = wordsStr.split(', ');

  // cycle our replacement words and prepare templates based on their length
  for (let word of words) {
    let starTemplate = '*'.repeat(word.length);


    text = text.replace(starTemplate, word); //save new text and replace one occurrence
  }

  console.log(text);
}
revealWords(
  'great',
  'softuni is ***** place for learning new programming languages'
);

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
