let person = {
  name: 'Pesho',
  age: 22,
};

let employee = Object.create(person) //create new object
console.log(employee.name);

let employee2 = Object.assign(person)
console.log(employee2);