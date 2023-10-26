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
// -- вградена библиотека, нас ни интересуват 3 на този етап, keys,values,entries!
// - function withing a JS object is called object

// -  object iteration
// -- get array of all property names(keys)

// 2. reference vs. value types
// 3 типа, които се копират по адрес:
// ARRAYS; OBJECTS; FUNCTIONS и 3-те са технически ОБЕКТИ.
// - референтните данни помнят АДРЕСА на данните, т.е. ако ги сменим, адреса си е същия, и ще принтираме новите данни, а тези от value types, не се променят
// - reference live in the HEAP
// -- heap е множество клетки, всяка си има адрес --> живее през цялото време
// -- в стека помним само адреса на тези хийп неща

// - value types (or primitive types) live in the STACK (also called a function stack or execution stack)
// --стек е купчинка (парчета памет едно върху друго) -> живее с всяка функция и се променя

// 3. JSON
// means JavaScript Object Notation
// open-standart file format that uses text to transmit data objects
// JSON is language INDEPENDENT (its plain text)
// JSON is "self-describing" and easy to understand
// JSON usage
// -exchange data between browser and server
// -JSON is a lightweight format compared to XML
// -JS has built-in functions to parse JSON so it's easy to use
