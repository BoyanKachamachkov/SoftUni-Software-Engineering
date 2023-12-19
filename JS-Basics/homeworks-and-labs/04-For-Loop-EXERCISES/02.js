function demo(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= 10; i++) {
    let table = i * n;
    console.log(`${i} * ${n} = ${i * n}`);
  }
}
