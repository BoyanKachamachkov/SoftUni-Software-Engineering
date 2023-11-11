function subtstring(str, startIndex, count) {
  let substring = str.substring(startIndex, startIndex + count);
  console.log(substring);
}
subtstring("SkipWord", 4, 7);
subtstring("ASentence", 1, 8);
