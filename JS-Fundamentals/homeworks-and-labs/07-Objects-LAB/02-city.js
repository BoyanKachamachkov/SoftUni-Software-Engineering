function cityInfo(object){

  let entries = Object.entries(object);

  for(entry of entries){
    console.log(entry.join(' -> '));
  }
}
cityInfo({
  name: 'Plovdiv',
  area: 389,
  population: 1162358,
  country: 'Bulgaria',
  postCode: '4000',
});
