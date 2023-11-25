let pattern = /(\w+)\(\)/g;
let text =
    'When you want to know whether a ptatern is found in a string, use test() or search() methods';

let modifiedText = text.replace(pattern, '****')
console.log(modifiedText); //replace all matches with **** due to global tag

 