function personInfo(firstName, lastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;

  // person['firstName'] = firstName; will work like the above for all

  // we can also use literal directly
  // let person = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   age: age,
  // };

  // shortCut when the arguments match the keys!!!
  // let person = {
  //   firstName,
  //   lastName,
  //   age,
  // };
  return person;
}
let result = personInfo('Peter', 'Pan', 20);
console.log(result);
