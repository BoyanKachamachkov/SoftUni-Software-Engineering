// filter()

let numbers = [2, 4, 1, 9, 10, 3];

let evenNumbers = numbers.filter((x) => x % 2 == 0);
// минаваме целия масив нъмбърс 1 по 1
// проверяваме всеки елемент дали се дели модулно на 2 без остатък
// -ако това е истина, то този елемент бива съхранен в НОВИЯ ни масив - evenNumbers
// -ако това НЕ Е истина, то този елемент се пропуска
// накрая си имаме ново масивче, филтрирано по условието, което сме задали

console.log(numbers);
console.log(evenNumbers); //2,4,10, защото само те отг. на условието

let oddNumbers = numbers.filter((x) => x % 2 !== 0); //тук пък вадим само нечетните
console.log(oddNumbers);

// filtering with strings WORKS TOO!
let names = ['pesho', 'gosho', 'ivo'];
let shortNames = names.filter((x) => x.length <= 3);
console.log(shortNames);

// Take numbers on even positions(indexes)
let evenPostionNumber = numbers.filter((x, i) => i % 2 === 0); //1 параметър ни е СТОЙНОСТТА, но 2-рия ни е индекса, и така си го взехме него).
console.log(evenPostionNumber);
