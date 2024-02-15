window.addEventListener("load", solve);

function solve() {


  const firstNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const genderRef = document.getElementById('genderSelect');
  const dishDescRef = document.getElementById('task');
  const submitBtnRef = document.getElementById('form-btn');

  const inProgressRef = document.getElementById('in-progress');
  const inProgressCountRef = document.getElementById('progress-count');

  const finishedRef = document.getElementById('finished');
  const clearBtnRef = document.getElementById('clear-btn');

  submitBtnRef.addEventListener('click', (event) => {

    event.preventDefault();

    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const age = ageRef.value;
    const gender = genderRef.value;
    const dishDesc = dishDescRef.value;

    if (!firstName || !lastName || !age || !gender || !dishDesc) {
      return;
    }

    const liEl = e('li');
    liEl.className = 'each-line';

    const articleEl = e('article');
    articleEl.appendChild(e('h4', `${firstName} ${lastName}`));
    articleEl.appendChild(e('p', `${gender}, ${age}`));
    articleEl.appendChild(e('p', `Dish description: ${dishDesc}`));
    liEl.appendChild(articleEl);

    const editBtn = e('button', 'Edit');
    editBtn.className = 'edit-btn';

    const completeBtn = e('button', 'Mark as complete');
    completeBtn.className = 'complete-btn';

    liEl.appendChild(editBtn);
    liEl.appendChild(completeBtn);

    inProgressRef.appendChild(liEl);

    inProgressCountRef.textContent++;

    // reset form
    document.querySelector('form').reset();

    editBtn.addEventListener('click', (event) => {
      event.preventDefault();


      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      ageRef.value = age;
      genderRef.value = gender;
      dishDescRef.value = dishDesc;

      inProgressCountRef.textContent--;
      // clean the li el
      liEl.remove();
    });

    completeBtn.addEventListener('click', (event) => {
      event.preventDefault();

      editBtn.remove();
      completeBtn.remove();
      finishedRef.appendChild(liEl);
      inProgressCountRef.textContent--;

    });


    clearBtnRef.addEventListener('click', (event) => {
      event.preventDefault();

      finishedRef.textContent = '';
    });


  });

  function e(type, content) {
    const element = document.createElement(type);

    if (content) {
      element.textContent = content;

    }
    return element;
  }


}
