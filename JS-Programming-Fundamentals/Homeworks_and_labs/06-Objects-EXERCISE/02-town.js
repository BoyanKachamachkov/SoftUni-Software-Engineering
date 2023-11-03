function towns(list) {
  let townInfo = {};

  for (const line of list) {
    let [town, latitude, longitude] = line.split(' | '); //destructure + 3 vars

    townInfo.town = town; //push to object
    townInfo.latitude = Number(latitude).toFixed(2); //push to object
    townInfo.longitude = Number(longitude).toFixed(2); //push to object
    console.log(townInfo);
  }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
