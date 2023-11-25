let pattern = /(\w+)\(\)/g;
let text =
    'When you want to know whether a ptatern is found in a string, use test() or search() methods use test() or search() methods use test() or search() methods';

    // very detailed info for all matches
    // matchAll requires GLOBAL flag!
let matches = text.matchAll(pattern);

for (let match of matches) {
    console.log(match);
}
