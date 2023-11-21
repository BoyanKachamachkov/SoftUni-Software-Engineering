function employees(arr) {


  let object = {};

  for(let name of arr){

    object[name] = name.length;
  }

  // for in cycle for obj

  // kvp = key
  // object[kvp] = value
  for(kvp in object){
    console.log(`Name: ${kvp} -- Personal Number: ${object[kvp]}`);
  }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
