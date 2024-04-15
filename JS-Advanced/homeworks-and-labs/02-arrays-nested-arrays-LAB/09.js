function solve(matrix) {
    // start from the first num
    // let biggest = matrix[0][0];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (const arr of matrix) {
        for (const element of arr) {
            if (element > biggest) {
                biggest = element;
            }
        }
    }
    return biggest;
}


solve([
    [20, 50, 245],
    [8, 33, 145]
]);

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);