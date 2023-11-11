function strSubstr(word, text) {
   text = text.toLowerCase().split(' ');

//   console.log(text);

  if (text.includes(word)) {
    console.log(word);
    return;
  } else {
    console.log(`${word} not found!`);
  }
}
strSubstr('javascript', 'JavaScript is the best programming language');
strSubstr('python', 'JavaScript is the best programming language');
