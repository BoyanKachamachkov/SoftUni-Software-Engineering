function solve(arr) {

    let output = [];
    let biggest = 0;

    for (let num of arr) {
        if (num >= biggest) {
            output.push(num);
            biggest = num;
        }
    }

    return output;
}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);