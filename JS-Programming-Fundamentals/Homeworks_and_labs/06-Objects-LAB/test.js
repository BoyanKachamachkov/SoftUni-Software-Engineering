let peter = {
  name: 'Peter',
  age: 20,
  height: 183,
  sayHello: function () {
    console.log('Hello!');
  },
};

// peter.name;
// peter.sayHello();

// console.log(peter);
// peter.hairColor = 'brown';
// console.log(peter);

// console.log(peter['name']);

// свойство .keys
let keys = Object.keys(peter);
// console.log(peter[keys[0]]);

// свойство .values
Object.values(peter);
// console.log(peter);

// свойство ентрис
let entries = Object.entries(peter);
// console.log(entries);

// iterate through keys
// -  use for of cycle

for (let key of keys) {
  console.log(key, '->', peter[key]);
}
