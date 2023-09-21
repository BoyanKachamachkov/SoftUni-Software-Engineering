function fruitShop(input) {
  let fruit = input[0];
  let dayOfTheWeek = input[1];
  let qty = Number(input[2]);

  let sum = 0.0;

  if (
    dayOfTheWeek === 'Monday' ||
    dayOfTheWeek === 'Tuesday' ||
    dayOfTheWeek === 'Wednesday' ||
    dayOfTheWeek === 'Thursday' ||
    dayOfTheWeek === 'Friday'
  ) {
    switch (fruit) {
      case 'banana':
        sum = qty * 2.5;
        console.log(sum.toFixed(2));
        break;
      case 'apple':
        sum = qty * 1.2;
        console.log(sum.toFixed(2));
        break;
      case 'orange':
        sum = qty * 0.85;
        console.log(sum.toFixed(2));
        break;
      case 'grapefruit':
        sum = qty * 1.45;
        console.log(sum.toFixed(2));
        break;
      case 'kiwi':
        sum = qty * 2.7;
        console.log(sum.toFixed(2));
        break;
      case 'pineapple':
        sum = qty * 5.5;
        console.log(sum.toFixed(2));
        break;
      case 'grapes':
        sum = qty * 3.85;
        console.log(sum.toFixed(2));
        break;
      default:
        console.log('error');
        break;
    }
  } else if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday')
    switch (fruit) {
      case 'banana':
        sum = qty * 2.7;
        console.log(sum.toFixed(2));
        break;
      case 'apple':
        sum = qty * 1.25;
        console.log(sum.toFixed(2));
        break;
      case 'orange':
        sum = qty * 0.9;
        console.log(sum.toFixed(2));
        break;
      case 'grapefruit':
        sum = qty * 1.6;
        console.log(sum.toFixed(2));
        break;
      case 'kiwi':
        sum = qty * 3.0;
        console.log(sum.toFixed(2));
        break;
      case 'pineapple':
        sum = qty * 5.6;
        console.log(sum.toFixed(2));
        break;
      case 'grapes':
        sum = qty * 4.2;
        console.log(sum.toFixed(2));
        break;
      default:
        console.log('error');
        break;
    }
  else {
    console.log('error');
  }
}
