function lockedProfile() {
    (async () => {
        const profilesData = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const profiles = await profilesData.json();
        console.log(profiles);

    })();

    function createHtmlProfile(userIndex, username, email, age) {


    }

    let profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');

    let profileImage = document.createElement('img');
    profileImage.src = './iconProfile2.png';
    profileImage.classList.add('user-icon');

    let lockLabel = document.createElement('label');
    lockLabel.textContent = 'Lock';

    let lockRadio = document.createElement('input');
    lockRadio.type = 'radio';
    lockRadio.name = `user${userIndex}Locked`;
    lockRadio.value = 'lock';
    lockRadio.checked = true;


    // unlock
    let unlockLabel = document.createElement('label');
    unlockLabel.textContent = 'Unlock';

    let unlockRadio = document.createElement('input');
    unlockRadio.type = 'radio';
    unlockRadio.name = `user${userIndex}Locked`;
    unlockRadio.value = 'unlock';


    let br = document.createElement('br');
    let hr = document.createElement('hr');

    let usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';

    let usernameInput = document.createElement('input');
    usernameInput.name = `user${userIndex}Username`;
    usernameInput.value = username;
    usernameInput.readOnly = true;
    usernameInput.disabled = true;


    let hiddenFieldsDiv = document.createElement('div');
    hiddenFieldsDiv.id = `user${userIndex}HiddenFields`;

    let hiddenFieldsHr = document.createElement('hr');

    // email
    let emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';

    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = email;
    emailInput.readOnly = true;
    emailInput.disabled = true;

    // age
    let ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';

    let ageInput = document.createElement('input');
    ageInput.type = 'email';
    ageInput.value = age;
    ageInput.readOnly = true;
    ageInput.disabled = true;

}
