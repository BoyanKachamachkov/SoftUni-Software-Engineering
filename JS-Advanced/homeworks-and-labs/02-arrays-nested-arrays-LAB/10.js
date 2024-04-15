function solve(matrix) {

    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - 1 - i];
    }

    console.log(mainSum, secondarySum);
}

solve([
    [20, 40],
    [10, 60]
]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);