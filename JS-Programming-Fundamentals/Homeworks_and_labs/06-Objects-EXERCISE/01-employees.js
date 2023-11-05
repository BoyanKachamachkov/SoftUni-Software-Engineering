function employees(arr) {
  let object = {};

  for (const line of arr) {
    object[line] = line.length;
  }

  for (const name in object) {
    console.log(`Name: ${name} -- Personal Number: ${object[name]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
