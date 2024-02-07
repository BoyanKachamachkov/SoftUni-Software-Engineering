let person = {
  name: 'Pesho',
  age: 20,
  hobby: 'football',
};

// add not numerable properpty
Object.defineProperty(person, 'grades', {
  // internal properties
  enumerable: false,
  value: [2, 3, 4, 5, 6],
});

// enumerate props
for (const prop in person) {
  console.log(prop);
}

console.log('not in for loop', person.grades);

// change exsisting property
Object.defineProperty(person, 'hobby', {
  enumerable: false,
});

// enumerate props , HOBBY is now hidden, since its no longer enumerable.
for (const prop in person) {
  console.log(prop);
}

// getcurrent internal properties of a property
let descriptor = Object.getOwnPropertyDescriptor(person, 'grades');
console.log(descriptor);
