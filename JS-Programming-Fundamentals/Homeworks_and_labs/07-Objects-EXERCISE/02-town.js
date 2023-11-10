function towns(arr) {
  let townInfo = {};

  for (const line of arr) {
    let [name, latitude, longitude] = line.split(" | ");

    townInfo.town = name;
    townInfo.latitude = Number(latitude).toFixed(2);
    townInfo.longitude = Number(longitude).toFixed(2);

    console.log(townInfo); //print each town at the end of the cycle
    
  }
  // console.log(townInfo); -> prints only the last iteration!
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
