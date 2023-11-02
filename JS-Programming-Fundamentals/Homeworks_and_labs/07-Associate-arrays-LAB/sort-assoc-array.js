// declare associative array
let phoneBook = {
  ivaylo: '0887043452',
  pesho: '0887043454',
  gosho: '0887043452',
  stamat: '0887043442',
  mariyka: '0887043252',
};

// convert associate array to normal array
let phoneBookEntries = Object.entries(phoneBook);

// sort the array (normal sort)
phoneBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
// sort + destructure in one operation
// phoneBookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

// sort by value (just use 1, instead of 0 index for the value)
phoneBookEntries.sort((kvpA, kvpB) => kvpA[1].localeCompare(kvpB[1]));

// optional: convert back to associate array(object)
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);
console.log(sortedPhoneBook);
