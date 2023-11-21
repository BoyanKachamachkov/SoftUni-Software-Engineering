function employees(arr){

  let object = {};

  for(let name of arr){
    object[name] = name.length; //create key 
  }

  for(el in object){
    console.log(`Name: ${el} -- Personal Number: ${object[el]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
