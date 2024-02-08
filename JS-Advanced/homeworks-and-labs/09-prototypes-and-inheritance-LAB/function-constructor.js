function Person(name, age) {
  this.name = name;
  this.age = age;
} 

let person = new Person( 'Pesho', 20 )
console.log(person, person  instanceof Person);
