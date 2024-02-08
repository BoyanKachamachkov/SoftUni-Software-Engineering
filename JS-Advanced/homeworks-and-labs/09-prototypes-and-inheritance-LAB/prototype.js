let person = {
  name: 'Pesho Goshev',
  age: 22,
};

let employee = {
  id: '111',
  department: 'development',
};

// кой ще бъде другарче (прототип) на обекта ни?
Object.setPrototypeOf(employee, person);

console.log(employee);
console.log(employee.__proto__); //same outcome
console.log(Object.getPrototypeOf(employee)); //same outcome

// въпреки това имаме достъп до името, което се намира в прототипа (другарчето, person)
console.log(employee.name);

// loop преминаваме през всички пропъртита и на обекта - employee -  и на неговото другарче (прототипа му, person)
for (const key in employee) {
  console.log(key);
}

// сега вече не достъпваме пропъртитата на прототипа, защото технически не са на обекта ни директо, а са на другарчето му, сърдито другарче!
for (const key in employee) {
  if (employee.hasOwnProperty(key)) {
    console.log(`Object's own properties: ${key}`);
  } else {
    console.log(`It's Prototype's properties: ${key}`);
  }
}
