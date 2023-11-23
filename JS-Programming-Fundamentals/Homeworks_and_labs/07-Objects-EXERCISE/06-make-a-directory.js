function dictionary(arr) {
    // receive arr of strings in json
    // parse the strings and combine into obj
    //      -each string will contain temrs + description
    //      -if you receive same term twice, replace with new def.

    let dict = {};

    for (let line of arr) {
        let parsed = JSON.parse(line); //transform line to js
        let keys = Object.keys(parsed); //take keys from each line
        let key = keys[0];

        // store key into obj.
        dict[key] = parsed[key];
    }

    // SORT dict. ALPHABETICALLY as in real dict.
    let sortKey = Object.keys(dict).sort((a, b) => a.localeCompare(b));

    // print every term + def. on new line format
    for (let key of sortKey) {
        console.log(`Term: ${key} => Definition: ${dict[key]}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
