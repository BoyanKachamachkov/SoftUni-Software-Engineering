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
  const confirmList = document.querySelector('.confirm-list');
  const output = document.getElementById('verification');

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

  function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
    const element = e('li');
    element.className = 'reservation-content';
    const article = e('article');

    article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
    article.appendChild(e('p', `From date: ${dateIn}`));
    article.appendChild(e('p', `To date: ${dateOut}`));
    article.appendChild(e('p', `For ${peopleCount} people`));

    element.appendChild(article);

    return element;
  }

  function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
    const element = createInfo(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );

    // create btns & add classes
    const editBtn = e('button', 'Edit');

    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () =>
      onEditClick(firstName, lastName, dateIn, dateOut, peopleCount)
    );
    const continueBtn = e('button', 'Continue');
    continueBtn.className = 'continue-btn';
    const infoList = document.querySelector('.info-list');
    continueBtn.addEventListener(
      'click',
      onContinueClick.bind(
        null,
        firstName,
        lastName,
        dateIn,
        dateOut,
        peopleCount
      )
    );
    // todo add continue event list

    // attach to li directly
    element.appendChild(editBtn);
    element.appendChild(continueBtn);

    return element;
  }

  function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {
    const result = createConfirmation(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );

    confirmList.appendChild(result);

    // clean
    infoList.textContent = '';
  }

  function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
    // the other way around
    inputs.firstName.value = firstName;
    inputs.lastName.value = lastName;
    inputs.dateIn.value = dateIn;
    inputs.dateOut.value = dateOut;
    inputs.peopleCount.value = peopleCount;

    // delete element with infoList without params
    infoList.textContent = '';

    // next btn re-enable
    nextBtn.disabled = false;
  }

  function createConfirmation(
    firstName,
    lastName,
    dateIn,
    dateOut,
    peopleCount
  ) {
    const element = createInfo(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );

    // create btns & add classes
    const confirmBtn = e('button', 'Confirm');

    confirmBtn.className = 'confirm-btn';
    confirmBtn.addEventListener('click', onFinishClick.bind(null, true));

    const cancelBtn = e('button', 'Cancel');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.addEventListener('click', onFinishClick.bind(null, false));

    // attach to li directly
    element.appendChild(confirmBtn);
    element.appendChild(cancelBtn);

    return element;
  }

  function onFinishClick(confirmed) {
    const className = confirmed
      ? 'reservation-confirmed'
      : 'reservation-cancelled';
    const text = confirmed ? 'Confirmed.' : 'Cancelled.';

    output.className = className;
    output.textContent = text;

    confirmList.textContent = '';

    nextBtn.disabled = false;
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
