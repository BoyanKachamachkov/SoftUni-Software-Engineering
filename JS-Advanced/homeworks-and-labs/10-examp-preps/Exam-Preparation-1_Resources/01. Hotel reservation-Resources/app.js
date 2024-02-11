window.addEventListener('load', solve);

function solve() {
  // take input fields
  // validate they are correct
  // on clicking next move the info in reservation and make next gray
  // edit and continue must be enabled

  //    обект за всичките инпути
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

    const firstName = document.getElementById('first-name').value;
  }
}
