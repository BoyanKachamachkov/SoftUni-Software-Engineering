function oscars(input) {
  let actorName = input[0]; //zahari
  let academyInitialPoints = Number(input[1]); //205
  let judges = Number(input[2]); //4

  let additionalPoints = academyInitialPoints;

  for (let index = 3; index <= input.length - 1; index += 2) {
    let currentJudge = input[index];
    let currentJudgePoints = Number(input[index + 1]);
    additionalPoints =
      additionalPoints + (currentJudge.length * currentJudgePoints) / 2;

    if (additionalPoints > 1250.5) {
      break;
    }
  }

  if (additionalPoints > 1250.5) {
    console.log(
      `Congratulations, ${actorName} got a nominee for leading role with ${additionalPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actorName} you need ${(1250.5 - additionalPoints).toFixed(
        1
      )} more!`
    );
  }
}
