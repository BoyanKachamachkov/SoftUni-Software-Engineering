window.addEventListener("load", solve);

function solve() {


  const firstNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const genderRef = document.getElementById('genderSelect');
  const dishDescRef = document.getElementById('task');
  const submitBtnRef = document.getElementById('form-btn');

  submitBtnRef.addEventListener('click', (e) => {
    e.preventDefault();

    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const age = ageRef.value;
    const gender = genderRef.value;
    const dishDesc = dishDescRef.value;
  });



}
