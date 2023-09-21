function shopsDifferentCities(input) {
  let product = input[0];
  let city = input[1];
  let qty = Number(input[2]);

  let price = 0;

  if (city === 'Sofia') {
    switch (product) {
      case 'coffee':
        price = qty * 0.5;
        break;
      case 'water':
        price = qty * 0.8;
        break;
      case 'beer':
        price = qty * 1.2;
        break;
      case 'sweets':
        price = qty * 1.45;
        break;
      case 'peanuts':
        price = qty * 1.6;
        break;
    }
  } else if (city === 'Plovdiv') {
    switch (product) {
      case 'coffee':
        price = qty * 0.4;
        break;
      case 'water':
        price = qty * 0.7;
        break;
      case 'beer':
        price = qty * 1.15;
        break;
      case 'sweets':
        price = qty * 1.3;
        break;
      case 'peanuts':
        price = qty * 1.5;
        break;
    }
  } else if (city === 'Varna') {
    switch (product) {
      case 'coffee':
        price = qty * 0.45;
        break;
      case 'water':
        price = qty * 0.7;
        break;
      case 'beer':
        price = qty * 1.1;
        break;
      case 'sweets':
        price = qty * 1.35;
        break;
      case 'peanuts':
        price = qty * 1.55;
        break;
    }
  }

  console.log(price);
}
