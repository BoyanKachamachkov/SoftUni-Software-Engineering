function tenis(input) {
  let tournamentsCont = Number(input[0]);
  let initialPoints = Number(input[1]);
  let tournamentsWon = 0;
  let additionalPoints = 0;

  for (let i = 2; i <= input.length - 1; i++) {
    let currentTournament = input[i]; //chetem indexa

    if (currentTournament === 'F') {
      additionalPoints += 1200;
    } else if (currentTournament === 'SF') {
      additionalPoints += 720;
    } else if (currentTournament === 'W') {
      additionalPoints += 2000;
      tournamentsWon++;
    }
  }

  let averageWinsPercent = (tournamentsWon / tournamentsCont) * 100;
  let averagePoints = additionalPoints / tournamentsCont;

  console.log(`Final points: ${initialPoints + additionalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${averageWinsPercent.toFixed(2)}%`);
}
