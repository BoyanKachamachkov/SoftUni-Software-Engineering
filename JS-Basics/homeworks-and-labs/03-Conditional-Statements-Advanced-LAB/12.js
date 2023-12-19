function comissionsValue(input) {
  let city = input[0];
  let volumeOfSales = Number(input[1]);
  let comission = 0.0;

  if (city === 'Sofia') {
    if (volumeOfSales >= 0 && volumeOfSales <= 500) {
      comission = (5 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 500 && volumeOfSales <= 1000) {
      comission = (7 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 1000 && volumeOfSales <= 10000) {
      comission = (8 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 10000) {
      comission = (12 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else {
      console.log('error');
    }
  } else if (city === 'Varna') {
    if (volumeOfSales >= 0 && volumeOfSales <= 500) {
      comission = (4.5 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 500 && volumeOfSales <= 1000) {
      comission = (7.5 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 1000 && volumeOfSales <= 10000) {
      comission = (10 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 10000) {
      comission = (13 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else {
      console.log('error');
    }
  } else if (city === 'Plovdiv') {
    if (volumeOfSales >= 0 && volumeOfSales <= 500) {
      comission = (5.5 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 500 && volumeOfSales <= 1000) {
      comission = (8 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 1000 && volumeOfSales <= 10000) {
      comission = (12 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else if (volumeOfSales > 10000) {
      comission = (14.5 / 100) * volumeOfSales;
      console.log(comission.toFixed(2));
    } else {
      console.log('error');
    }
  } else {
    console.log('error');
  }
}
