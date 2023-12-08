function solve(arr) {
    let sequence = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command != 'END') {
        if (command.includes('add to start')) {
            let tokens = command.split('add to start ');
            let nums = tokens[1].split(' ').map(Number); //arr
            // nums = nums.sort((a, b) => b - a);
            sequence = sequence.concat(nums);

        } else if (command.includes('remove greater than')) {
            let tokens = command.split('remove greater than ');
            let num = Number(tokens[1]);

            sequence = sequence.filter((el) => el <= num);
        } else if (command.includes('replace')) {
            let tokens = command.split('replace ');
            let nums = tokens[1].split(' ').map(Number);
            let value = nums[0];
            let index = sequence.indexOf(value);
            let replacement = nums[1];

            if (index != -1) {
                sequence[index] = replacement;
            } else {
                command = arr.shift();
                continue;
            }
        } else if (command.includes('remove at index')) {
            let tokens = command.split('remove at index ');
            let idx = Number(tokens[1]);

            if (idx < 0 || idx > sequence.length) {
                command = arr.shift();
                continue;
            } else {
                sequence.splice(idx, 1);
            }
        } else if (command.includes('find even')) {
            let even = sequence.filter((num) => num % 2 == 0);
            console.log(even.join(' '));
        } else if (command.includes('find odd')) {
            let odd = sequence.filter((num) => num % 2 != 0);
            console.log(odd.join(' '));
        }

        command = arr.shift();
    }

    console.log(sequence.join(', '));
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
