function wordsTracker(arr) {
  let occurrences = {};
  let searchedWords = arr.shift().split(" ");

  for (let word of searchedWords) {
    occurrences[word] = 0; //loading both searched words inside the Obj
  }

  for (let word of arr) {
    if (word in occurrences) {
      occurrences[word]++;
    }
  }

  //transform to arr + sort by COUNT in DESC
  let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

  for (const [word, repeats] of entries) {
    console.log(`${word} - ${repeats}`);
  }
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

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
