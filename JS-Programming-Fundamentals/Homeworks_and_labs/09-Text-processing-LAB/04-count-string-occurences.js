function countStringOccurrences(text, word) {
  let count = text.split(' ').filter(w => w === word).length;

  console.log(count);

}
countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
