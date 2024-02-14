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

  const infoList = document.querySelector('.info-list');


  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNextClick);

  function onNextClick(e) {
    e.preventDefault();


    // check for empty strs
    if (
      inputs.firstName.value === '' ||
      inputs.lastName.value === '' ||
      inputs.dateIn.value === '' ||
      inputs.dateOut.value === '' ||
      inputs.peopleCount.value === ''
    ) {
      return;
    }

    // all inputs as values
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const dateIn = inputs.dateIn.value;
    const dateOut = inputs.dateOut.value;
    const peopleCount = Number(inputs.peopleCount.value);

    if (new Date(dateIn).getTime() >= new Date(dateOut).getTime()) {
      console.log('Check out is before check in!');
      return;
    }

    // reset form
    nextBtn.parentElement.reset();
    nextBtn.disabled = true;

    // pass to f to create us the whole LI 
    const result = createPreview(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );


    // assign the newly created LI tree to info-list (reservation field)
    infoList.appendChild(result);
  }

  function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
    const element = e('li');
    element.className = 'reservation-content';

    const article = e('article');
    article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
    article.appendChild(e('p', `From date: ${dateIn}`));
    article.appendChild(e('p', `To date: ${dateOut}`));
    article.appendChild(e('p', `For ${peopleCount} people`));

    element.appendChild(article);

    const editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';
    const continueBtn = e('button', 'Continue');
    continueBtn.className = 'continue-btn';

    article.appendChild(editBtn);
    article.appendChild(continueBtn);

    // our new tree of li element is fully created
    return element;

  }

  // factory element creator f
  function e(type, content) {

    const element = document.createElement(type);
    if (content) {
      element.textContent = content;

    }

    return element;
  }
}
