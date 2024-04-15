function solve(arr, n) {
    for (let i = 0; i < n; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}
solve(['1',
    '2',
    '3',
    '4'],
    2
); //3 4 1 2

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
); //Orange Coconut Apple Banana