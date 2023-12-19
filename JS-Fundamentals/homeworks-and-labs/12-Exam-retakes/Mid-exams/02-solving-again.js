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
        } else if (command.includes('remove greater than')) {
            let value = command.split('remove greater than ')[1];
            nums = nums.filter((el) => el <= value);
        } else if (command.includes('replace')) {
            let tokens = command.split('replace ');
            let numbersFromTokens = tokens[1].split(' ').map(Number);
            let value = numbersFromTokens[0];
            let replacement = numbersFromTokens[1];

            let index = nums.indexOf(value);
            if (index != -1) {
                nums[index] = replacement;
            } else {
                command = arr.shift();
                continue;
            }
        } else if (command.includes('remove at index')) {
            let num = command.split('remove at index ').map(Number)[1];

            if (num >= 0 && num < nums.length) {
                let remove = nums.indexOf(num);
                nums.splice(remove, 1);
            } else {
                command = arr.shift();
                continue;
            }
        } else if (command.includes('find even')) {
            let even = nums.filter((num) => num % 2 == 0);
            console.log(even.join(' '));
        } else if (command.includes('find odd')) {
            let odd = nums.filter((num) => num % 2 != 0);
            console.log(odd.join(' '));
        }
        command = arr.shift();
    }

    console.log(nums.join(', '));
}
solve([
    '1 2 3 10 10 6 4 10',
    'add to start 1 2 3',
    'remove greater than 5',
    'find even',
    'END',
]);
console.log('----');

solve([
    '1 2 3 10 10 6 4 10',
    'replace 10 1',
    'remove at index 0',
    'add to start 4 2',
    'END',
]);
console.log('----');
solve([
    '1 2 3 10 10 6 4 10',
    'find odd',
    'replace 4 1',
    'remove greater than 5',
    'END',
]);
