let phoneBook = new Map();

phoneBook.set('pesho', '0887643322');
phoneBook.set('mariya', '0987643322');
phoneBook.set('gosho', '0885643322');

console.log(phoneBook);
console.log(phoneBook.size);

console.log(phoneBook.keys());
console.log(phoneBook.values());
console.log(phoneBook.entries());

// Iterating a MAP
for (const iterator of phoneBook) {
  console.log(iterator);
}
