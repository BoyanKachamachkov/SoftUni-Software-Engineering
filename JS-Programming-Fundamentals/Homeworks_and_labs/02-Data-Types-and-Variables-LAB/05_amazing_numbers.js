function amazing(num) {
  let numAsString = String(num);
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }

  let sumAsString = String(sum);
  let isAmazing = 'False';

  for (let j = 0; j < sumAsString.length; j++) {
    if (sumAsString[j] == 9) {
      isAmazing = 'True';
    }
  }
  console.log(`${num} Amazing? ${isAmazing}`);
}
amazing(1233); // 1233 Amazing? True
amazing(999); // 1233 Amazing? True
