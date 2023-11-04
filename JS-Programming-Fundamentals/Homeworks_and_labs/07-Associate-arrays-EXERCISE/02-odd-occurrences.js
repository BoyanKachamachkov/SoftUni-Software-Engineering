function oddOccurences(input) {
  let arr = input.split(" ").map((e) => e.toLowerCase());

  let wordsObject = {};

  for (const word of arr) {
    if (!wordsObject.hasOwnProperty(word)) {
      wordsObject[word] = 0;
    }

    wordsObject[word]++;
  }

  let arrOfElements = Object.entries(wordsObject)
    .filter((double) => double[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1]);

    
  let result = "";

  for (const [word, qty] of arrOfElements) {
    result += `${word} `;
  }

  console.log(result);
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"); //c# php 1 5
// oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')
