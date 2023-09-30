//add at the end using push method

let students = [];
students.push('boby');
console.log(students);

students.push('evtim');
console.log(students);

//select element of invalid position
console.log(students[100]);

//set element on non-exsisting position (creates empty positions until 24) auto resize
students[23] = 'Yavor';
console.log(students);
console.log(students[23]);
console.log(students[22]);

//invalid index
console.log(students[-1]); //bad practice
students[-1] = 'ninja'; //not part of the array, practically

console.log(students[-1]);

// console.log(students.toString()); //spisuk svurzan sus zapetaq vinagi, ne e optimalen metod da se polzwa

//Join elements inside array into string
console.log(students.join(' ')); //sami opredelqme seperatora
