function loadingBar(n) {
  let result = ``;

  for (let i = 0; i < n / 10; i++) {
    result += '%';
  }

  if (n == 100) {
    console.log(`100% Complete!`);
    console.log(`[${result}${`.`.repeat(10 - n / 10)}]`);
  } else {
    console.log(`${n}% [${result}${`.`.repeat(10 - n / 10)}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(30);
console.log(`----`);
loadingBar(50);
loadingBar(100);
