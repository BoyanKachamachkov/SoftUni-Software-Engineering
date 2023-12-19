function grade(n) {
  if (n < 3.0) {
    console.log(`Fail (${Math.floor(n)})`);
  } else if (n < 3.5) {
    console.log(`Poor (${n.toFixed(2)})`);
  } else if (n < 4.5) {
    console.log(`Good (${n.toFixed(2)})`);
  } else if (n < 5.5) {
    console.log(`Very good (${n.toFixed(2)})`);
  } else if (n >= 5.5 && n <= 6.0) {
    console.log(`Excellent (${n.toFixed(2)})`);
  }
}
grade(3.33);
grade(4.5);
grade(2.99);
