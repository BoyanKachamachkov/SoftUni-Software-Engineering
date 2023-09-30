function solve(n) {
  for (let i = 1; i <= n; i++) {
    let lines = '';
    for (let j = 1; j <= i; j++) {
      lines += i + ' ';
    }
    lines = lines.trim();
    console.log(lines);
  }
}
