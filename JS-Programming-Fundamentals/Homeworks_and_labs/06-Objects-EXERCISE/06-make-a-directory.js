function dictionary(dataAsJson) {
  let myCollection = {};

  for (const line of dataAsJson) {
    let obj = JSON.parse(line);
    let keys = Object.keys(obj);
    let key = keys[0];

    myCollection[key] = obj[key];
  }

  let sortKey = Object.keys(myCollection).sort((a,b) => a.localeCompare(b));
  

  for(let key of sortKey){

    console.log(`Term: ${key} => Definition: ${myCollection[key]}`);
  }
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
