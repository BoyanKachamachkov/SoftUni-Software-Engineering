function solve(elements) {
    // Sum(ai)
    let sum = elements.reduce((acc, current) => acc + current, 0);
    console.log(sum);

    // Sum(1/ai)
    let inverseSum = elements.reduce((acc, current) => acc + 1 / current, 0);
    console.log(inverseSum);

    // Concat(ai)
    let concatenatedString = elements.join('');
    console.log(concatenatedString);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
