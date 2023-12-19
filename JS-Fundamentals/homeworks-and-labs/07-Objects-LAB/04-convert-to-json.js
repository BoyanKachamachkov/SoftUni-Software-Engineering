function convertToJSON(firstName, lastName, hairColor) {
    // receive 3 param & set to object

    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    };

    // print it
    // conv obj to json
    console.log(JSON.stringify(obj));
}
convertToJSON('George', 'Jones', 'Brown');
