let pattern = /\w+\(\)/g;
let text =
    'When you want to know whether a ptatern is found in a string, use test() or search() methods';

let match = pattern.exec(text);
// console.log(match[0]);

match = pattern.exec(text);
// console.log(match);

// run all matches
while (match) {
    console.log(`Found ${match[0]} on index ${match.index}`);
    match = pattern.exec(text);
}
