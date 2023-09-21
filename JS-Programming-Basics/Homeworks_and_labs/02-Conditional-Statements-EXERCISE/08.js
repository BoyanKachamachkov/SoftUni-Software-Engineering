function lunchBreak(input) {
  let serialName = input[0];
  let serialLength = Number(input[1]);
  let lunchBreak = Number(input[2]);

  let mandatoryEatingTime = (1 / 8) * lunchBreak;
  let mandatoryRelaxTime = (1 / 4) * lunchBreak;

  let totalMandatoryTime = mandatoryEatingTime + mandatoryRelaxTime; // qdene + relax otnema tolkowa ot lunchbreaka

  if (totalMandatoryTime + serialLength <= lunchBreak) {
    let timeLeft = lunchBreak - (totalMandatoryTime + serialLength);
    console.log(
      `You have enough time to watch ${serialName} and left with ${Math.ceil(
        timeLeft
      )} minutes free time.`
    );
  } else {
    let timeNeeded = totalMandatoryTime + serialLength - lunchBreak;
    console.log(
      `You don't have enough time to watch ${serialName}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}
