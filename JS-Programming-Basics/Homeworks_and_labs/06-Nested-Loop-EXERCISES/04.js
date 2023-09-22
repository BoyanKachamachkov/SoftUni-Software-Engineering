function trainers(input) {
  let index = 0;
  let judggesCount = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let totalGradesSum = 0;
  let totalGradesCount = 0;

  while (command !== 'Finish') {
    let gradesSum = 0;
    let presentationName = command; //shtom ne e finish, e prezentaciq;

    for (let i = 0; i < judggesCount; i++) {
      let curJudgeScore = Number(input[index]);
      index++;
      gradesSum += curJudgeScore;
    }

    let avgGrade = gradesSum / judggesCount;
    console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

    totalGradesSum += avgGrade;
    totalGradesCount++;

    command = input[index];
    index++;
  }

  let finalAverageGrade = totalGradesSum / totalGradesCount;
  console.log(`Student's final assessment is ${finalAverageGrade.toFixed(2)}.`);
}
