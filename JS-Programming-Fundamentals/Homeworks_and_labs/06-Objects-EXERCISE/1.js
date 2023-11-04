function ppl(arr) {
  let object = {};

  for (const name of arr) {
    object[name] = name.length;
  }

  for (el in object) {
    console.log(`Name: ${el} -- Personal Number: ${object[el]}`);
  }
}
ppl(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
