window.addEventListener('load', solve);

function solve() {
  // take input fields
  // validate they are correct
  // on clicking next move the info in reservation and make next gray
  // edit and continue must be enabled

  // group all inputs into object for easier use
  const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    dateIn: document.getElementById('date-in'),
    dateOut: document.getElementById('date-out'),
    peopleCount: document.getElementById('people-count'),
  };

  // закачаме функция на некст бутона
  document.getElementById('next-btn').addEventListener('click', onNextClick);

  function onNextClick(event) {
    event.preventDefault();

    // if any of our inputs is empty string, we terminate the program
    if (
      inputs.firstName.value == '' ||
      inputs.lastName.value == '' ||
      inputs.dateIn.value == '' ||
      inputs.dateOut.value == '' ||
      inputs.peopleCount.value == ''
    ) {
      return;
    }

    // all input values content
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const dateIn = new Date(inputs.dateIn.value);
    const dateOut = new Date(inputs.dateOut.value);
    const peopleCount = Number(inputs.peopleCount.value);
    console.log(firstName, lastName, dateIn, dateOut, peopleCount);
    // TODO! validate date in is before date out
    if (dateIn.getTime() >= dateOut.getTime()) {
      console.log('Check in is after check out!');
      return;
    }

    // clear fields in the end
    inputs.firstName.value = '';
    inputs.lastName.value = '';
    inputs.dateIn.value = '';
    inputs.dateOut.value = '';
    inputs.peopleCount.value = '';
  }
}
