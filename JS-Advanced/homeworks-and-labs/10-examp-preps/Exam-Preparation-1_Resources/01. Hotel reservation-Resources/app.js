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
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNextClick);

  const infoList = document.querySelector('.info-list');

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
    const dateIn = inputs.dateIn.value;
    const dateOut = inputs.dateOut.value;
    const peopleCount = Number(inputs.peopleCount.value);
    console.log(firstName, lastName, dateIn, dateOut, peopleCount);
    
    // TODO! validate date in is before date out
    if (new Date(dateIn).getTime() >= new Date(dateOut).getTime()) {
      console.log('Check in is after check out!');
      return;
    }

    // clear fields in the end
    // inputs.firstName.value = '';
    // inputs.lastName.value = '';
    // inputs.dateIn.value = '';
    // inputs.dateOut.value = '';
    // inputs.peopleCount.value = '';

    // option2 to clear all fields (selecting the whole form this way, as it does not have ID)
    nextBtn.parentElement.reset();

    // disable the next button at the end
    nextBtn.disabled = true;

    // prepare data for attachment by using F createPreview
    const result = createPreview(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );

    // attachData to
    infoList.appendChild(result);
  }

  function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
    // Use element creation function to prepare format
    const element = e('li');
    element.className = 'reservation-content';
    const article = e('article');

    article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
    article.appendChild(e('p', `From date: ${dateIn}`));
    article.appendChild(e('p', `To date: ${dateOut}`));
    article.appendChild(e('p', `For ${peopleCount} people`));

    element.appendChild(article);

    // create btns & add classes
    const editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';
    const continueBtn = e('button', 'Continue');
    continueBtn.className = 'continue-btn';

    // attach to li directly
    element.appendChild(editBtn);
    element.appendChild(continueBtn);

    return element;
  }

  //   factory element creation function
  function e(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element;
  }
}
