// string searching with indexOf

let text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor Tempora eius ratione iusto voluptatem! Accusamus, exercitationem dicta nulla unde dignissimos  dolor obcaecati?';

  
let dolorIndex = text.indexOf('dolor');
console.log(dolorIndex); //idx of first occur.

// find second dolor
let secondDolorIndex = text.indexOf('dolor', dolorIndex + 1);
console.log(secondDolorIndex); //idx of 2nd dolor

// search word that is missing
let missingWordIndex = text.indexOf('ivaylo');
console.log(missingWordIndex); //returns -1, as such word is not found

// get all indexes
let index = text.indexOf('dolor'); //find first occur. and save it (positive number)
while (index >= 0) {
  console.log('Dolor found on ' + index + 'position');
  index = text.indexOf('dolor', index + 1);
  //at some point we return -1 and exit the while cycle
}

//lastIndexOf
let lastDolorIndex = text.lastIndexOf('dolor');
console.log(lastDolorIndex);
