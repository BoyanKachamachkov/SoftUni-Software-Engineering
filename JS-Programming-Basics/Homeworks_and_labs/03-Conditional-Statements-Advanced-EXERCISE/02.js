function demo(input) {
  let currentTemp = Number(input[0]);
  let typeOfDay = input[1];

  let outfit = '';
  let shoes = '';

  if (currentTemp >= 10 && currentTemp <= 18) {
    switch (typeOfDay) {
      case 'Morning':
        outfit = 'Sweatshirt';
        shoes = 'Sneakers';
        break;
      case 'Afternoon':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
    }
  } else if (currentTemp > 18 && currentTemp <= 24) {
    switch (typeOfDay) {
      case 'Morning':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
      case 'Afternoon':
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        break;
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
    }
  } else {
    switch (typeOfDay) {
      case 'Morning':
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        break;
      case 'Afternoon':
        outfit = 'Swim Suit';
        shoes = 'Barefoot';
        break;
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
    }
  }
  console.log(`It's ${currentTemp} degrees, get your ${outfit} and ${shoes}.`);
}
