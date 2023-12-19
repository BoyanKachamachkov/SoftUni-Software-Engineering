function countStringOccurrences(text, word) {
  let count = text.split(' ').filter((w) => w === word).length;

  //filter will give us arr with the words
  // length will give us the number of the amount of repeats

  console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences(
  'softuni is great place for learning new programming languages',
  'softuni'
);
