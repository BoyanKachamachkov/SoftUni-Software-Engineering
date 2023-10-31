function towns(arr) {
  for (const info of arr) {
    let town = info.split(' | ');

    let [name, latitude, longitude] = town;

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    // let townName = town.shift();
    // let townLatitude = Number(town.shift()).toFixed(2);
    // let townLongitude = Number(town.shift()).toFixed(2);

    let object = {
      town: name,
      latitude: latitude,
      longitude: longitude,
    };

    console.log(object);
  }
}
