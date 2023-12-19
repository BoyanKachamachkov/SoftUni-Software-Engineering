function cinema(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;

  while (command !== 'Finish') {
    let movieName = command; //shtom ne e finish e film
    let freeSeats = Number(input[index]); //10 converted
    index++;

    let command1 = input[index];
    index++;

    let takenPlaces = 0;

    while (command1 !== 'End') {
      //znachi imam vid bilet.
      let ticketType = command1;

      if (ticketType === 'student') {
        studentTickets++;
      } else if (ticketType === 'standard') {
        standardTickets++;
      } else {
        kidTickets++;
      }

      takenPlaces++; //edno mqsto e zaeto sus sig ot gornite.

      if (takenPlaces === freeSeats) {
        break;
      }

      command1 = input[index];
      index++;
    }

    let percentTaken = (takenPlaces / freeSeats) * 100;
    console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }

  totalTickets = standardTickets + studentTickets + kidTickets;
  console.log(`Total tickets: ${totalTickets}`);

  let studentTicketsPercent = (studentTickets / totalTickets) * 100;
  let standardTicketsPercent = (standardTickets / totalTickets) * 100;
  let kidTicketsPercent = (kidTickets / totalTickets) * 100;
  console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}
