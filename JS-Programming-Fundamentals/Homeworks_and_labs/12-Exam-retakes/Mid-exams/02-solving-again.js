function solve(arr) {
    let nums = arr.shift();
    let command = arr.shift();

    while (command != 'END') {
        command = arr.shift();
    }
}
solve([
    '1 2 3 10 10 6 4 10',
    'add to start 1 2 3',
    'remove greater than 5',
    'find even',
    'END',
]);
