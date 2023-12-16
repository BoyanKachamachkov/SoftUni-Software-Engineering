function solve(arr) {
    let nums = arr.shift().split(' ').map(Number);
    // console.log(nums);
    let command = arr.shift();

    while (command != 'END') {
        if (command.includes('add to start ')) {
            let numbers = command
                .split('add to start ')[1]
                .split(' ')
                .map(Number);
            // console.log(numbers);

            nums = numbers.concat(nums);
            console.log(nums);
        } else if (command.includes('remove greater than'))
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
