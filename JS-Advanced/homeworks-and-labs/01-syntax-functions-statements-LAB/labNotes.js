// Function declaration
function printSomething(text) {
    console.log(text);
}
printSomething('Pesho e gotin');

// Function Expression
let printMsg = function (text) {
    console.log(text);
};
printMsg('Pesho e oshte po-gotin!');

// Arrow function
let sum = (a, b) => {
    console.log(a + b);
};
sum(2, 10);


// function return
function calculate(a, b) {
    return a + b;
}
let result = calculate(2, 20);
console.log(result);

// function expression return
let calculateExp = function (a, b) {
    return a + b;
};

let resultExp = calculateExp(3, 5);
console.log(resultExp);


// default input param
function solve(input = 'pesho', age) {
    console.log(arguments)
    console.log(input, age);
}
solve('Gosho', 20);

