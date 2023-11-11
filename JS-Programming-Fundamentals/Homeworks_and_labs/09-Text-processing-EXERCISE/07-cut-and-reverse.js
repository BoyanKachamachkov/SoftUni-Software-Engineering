function cutAndReverse(str) {
  let middleIdx = str.length / 2;

  /* 
  Slice to both halves
  Split with '' to create arrs
  Reverse them
  Join them with ''
  */
  let firstHalf = str.slice(0, middleIdx).split('').reverse().join('');
  console.log(firstHalf);
  let secondHalf = str.slice(middleIdx).split('').reverse().join(''); //end argument is optional + its exclusive
  console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
