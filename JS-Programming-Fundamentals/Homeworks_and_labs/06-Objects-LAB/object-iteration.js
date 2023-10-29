// ITERATE through keys!
// for-of loop

let info = {
  firstName: 'Boyan',
  lastName: 'Petrov',
  age: 28,
  eyeColor: 'brown',
  isMale: true,
};

// Iterate values
for (const value of Object.values(info)) {
  console.log(value);
}

// Iterate keys
for (const key of Object.keys(info)) {
  console.log(`${key} - ${info[key]}`);
}
