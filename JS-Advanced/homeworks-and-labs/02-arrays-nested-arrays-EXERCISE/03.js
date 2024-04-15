function solve(input) {

    let output = [];
    let counter = 1;
    for (let i = 0; i < input.length; i++) {

        let command = input[i];
        if (command == 'add') {
            output.push(counter);
            counter++;
        } else {
            output.pop();
            counter++;
        }
    }
    return output.length ? output.join('\n') : 'Empty';

}

console.log(solve(['add',
    'add',
    'add',
    'add']
));
;

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log(solve(['remove',
    'remove',
    'remove']
));