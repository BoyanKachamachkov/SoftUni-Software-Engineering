function convertToObject(stringJSON) {
    let obj = JSON.parse(stringJSON);

    for (entry of Object.entries(obj)) {
        console.log(entry.join(': '));
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
