function convertToObject(stringJSON) {
  let object = JSON.parse(stringJSON);

  for (const el of Object.keys(object)) {
    console.log(`${el}: ${object[el]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
