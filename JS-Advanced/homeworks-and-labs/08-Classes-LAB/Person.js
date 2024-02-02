class Person {
  firstName;
  lastName;
  age;
  email;

  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName}, ${this.lastName}, ${this.age}, ${this.email} `;
  }

  static greet() {
    console.log("Hello world");
  }

  static clone(person) {
    const result = new Person(
      person.firstName,
      person.lastName,
      person.age,
      person.email
    );
    return result;
  }
}

const myPerson = new Person("John", "Smith", 32, "john@abv.bg");
console.log(myPerson);
console.log(myPerson.toString());

console.log(myPerson instanceof Person);
Person.greet();

const myClone = Person.clone(myPerson);
console.log(myClone);
