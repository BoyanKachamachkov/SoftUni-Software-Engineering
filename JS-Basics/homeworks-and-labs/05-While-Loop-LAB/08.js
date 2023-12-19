function demo(input) {
  let student = input[0];

  let currentYearlyScore = Number(input[1]);
  let currentClass = 1;
  let lowScore = 0;
  let totalScore = 0;

  while (currentClass <= 12) {
    if (currentYearlyScore >= 4.0) {
      totalScore += currentYearlyScore;
      currentClass++;
      currentYearlyScore = Number(input[currentClass]);
    } else {
      lowScore++;
      if (lowScore === 2) {
        console.log(`${student} has been excluded at ${currentClass} grade`);
        return;
      }
      currentYearlyScore = Number(input[currentClass]);
    }
  }
  console.log(
    `${student} graduated. Average grade: ${(totalScore / 12).toFixed(2)}`
  );
}
