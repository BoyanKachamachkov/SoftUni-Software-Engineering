function vacation(numPeople, typePeople, day) {
  let pricePerPerson = 0;
  if (typePeople === 'Students') {
    switch (day) {
      case 'Friday':
        pricePerPerson += 8.45;
        break;
      case 'Saturday':
        pricePerPerson += 9.8;
        break;
      case 'Sunday':
        pricePerPerson += 10.46;
        break;
    }
  } else if (typePeople === 'Business') {
    switch (day) {
      case 'Friday':
        pricePerPerson += 10.9;
        break;
      case 'Saturday':
        pricePerPerson += 15.6;
        break;
      case 'Sunday':
        pricePerPerson += 16;
        break;
    }
  } else if (typePeople === 'Regular') {
    switch (day) {
      case 'Friday':
        pricePerPerson += 15;
        break;
      case 'Saturday':
        pricePerPerson += 20;
        break;
      case 'Sunday':
        pricePerPerson += 22.5;
        break;
    }
  }

  let discount = 0;
  if (typePeople === 'Students' && numPeople >= 30) {
    discount = 0.15;
  } else if (typePeople === 'Business' && numPeople >= 100) {
    numPeople -= 10;
  } else if (typePeople === 'Regular' && numPeople >= 10 && numPeople <= 20) {
    discount = 0.05;
  }

  let totalPrice = numPeople * pricePerPerson;
  discount *= totalPrice;
  totalPrice = totalPrice - discount;

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
