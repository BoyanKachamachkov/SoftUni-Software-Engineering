// 1. objects - definition, properties, methods
// -  What are objects?
// -- Structure of related data or functionality
// -- contains values accessed by string keys
// ---  data values are called properties
// --- function values are called methods
// ---  you can add and remove properties DURING RUNTIME!
// ----реда на свойствата не е гарантинран, освен ако обекта не е направен локално при нас, при JSON ще видим разлики
// we can create an obj with an object literal
// индексиращия оператор се вика с КВАДРАТНИ скоби и за обекти и масиви, за да е едно и също!!! затова не се вика с къдрави
let person = { name: 'Peter', age: 20, height: 183 }; //example

// we can also define an empty object and add properties later by using . //examples below
let person2 = {};
person.name = 'Peter';
person.age = 20;
person.hairColor = 'black';

// -  object methods
// - function withing a JS object is called object

// -  object iteration
// -- get array of all property names(keys)

// 2. reference vs. value types
// 3. JSON
