function wordsTracker(arr) {
  let object = {};

  let [word1, word2] = arr.shift().split(" ");

  for (const line of arr) {
    object[line] = 0;
  }

  console.log(object);
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
