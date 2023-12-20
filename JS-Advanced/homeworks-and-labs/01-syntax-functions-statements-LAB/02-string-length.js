function solve(arg1, arg2, arg3) {
    let l1 = arg1.length;
    let l2 = arg2.length;
    let l3 = arg3.length;
    let sum = l1 + l2 + l3;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
