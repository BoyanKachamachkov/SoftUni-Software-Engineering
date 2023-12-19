function worldSwimmingRecord(input) {
  let currentWorldRecord = Number(input[0]);
  let distanceToBeatMetres = Number(input[1]);
  let ivanTimePerMeter = Number(input[2]);

  let waterResistance = Math.floor(distanceToBeatMetres / 15) * 12.5;
  let ivansTotalTime = distanceToBeatMetres * ivanTimePerMeter;
  ivansTotalTime = ivansTotalTime + waterResistance;

  if (ivansTotalTime < currentWorldRecord) {
    console.log(
      `Yes, he succeeded! The new world record is ${ivansTotalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    let secondsNeeded = ivansTotalTime - currentWorldRecord;
    console.log(
      `No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`
    );
  }
}
