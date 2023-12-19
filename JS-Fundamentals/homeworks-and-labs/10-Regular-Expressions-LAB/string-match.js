let pattern = /(\w+)\(\)/g;
let text =
    'When you want to know whether a ptatern is found in a string, use test() or search() methods use test() or search() methods use test() or search() methods';

let matches = text.match(pattern);
console.log(matches); //due to global flag we get arr with all matches, but its not very useful, since we don't obtain all the info this way

for (let match of matches) {
    console.log(match);
}
