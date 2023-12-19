function login(input) {
  let username = input[0];
  let pass = '';

  for (let i = username.length - 1; i >= 0; i--) {
    pass += username[i];
  }

  let guess = input[1]; //взимаме първо предположение
  let index = 2; //подготвяме 2-рото предположение
  let wrongAttempts = 0;

  while (guess != pass) {
    wrongAttempts++;
    if (wrongAttempts == 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    console.log(`Incorrect password. Try again.`);
    guess = input[index]; // go;
    index++; //let me in
  }
  console.log(`User ${username} logged in.`);
}
