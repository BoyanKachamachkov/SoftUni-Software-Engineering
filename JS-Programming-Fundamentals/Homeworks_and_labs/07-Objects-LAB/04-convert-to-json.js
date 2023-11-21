function convertToJSON(firstName, lastName, hairColor){
  // receive 3 param & set to object

  let obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor
  }

  // conv obj to json
  console.log(JSON.stringify(obj));
  // print it
}
convertToJSON('George', 'Jones', 'Brown');
