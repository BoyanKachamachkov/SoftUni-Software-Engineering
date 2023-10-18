function sign(a, b, c) {
  let result;

  if (a * b * c < 0) {
    result = 'Negative';
  } else {
    result = 'Positive';
  }

  console.log(result);
}
sign(-5, 1, 1);
sign(-1, -2, -3);
sign(-6, -12, 14);
sign(5, 12, -15);
