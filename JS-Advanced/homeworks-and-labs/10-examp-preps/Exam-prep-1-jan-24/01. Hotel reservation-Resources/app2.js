window.addEventListener('load', solve);


function solve() {

  // take inputs & validate them
  const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    dateIn: document.getElementById('date-in'),
    dateOut: document.getElementById('date-out'),
    peopleCount: document.getElementById('people-count'),
  };


  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNextClick);

  function onNextClick(e) {
    e.preventDefault();


    // check for empty strs
    if (
      firstName.value === '' ||
      lastName.value === '' ||
      dateIn.value === '' ||
      dateOut.value === '' ||
      peopleCount.value === ''
    ) {
      return;
    }

    // all inputs as values
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const dateIn = inputs.dateIn.value;
    const dateOut = inputs.dateOut.value;
    const peopleCount = Number(inputs.peopleCount.value);

    


  }
}
