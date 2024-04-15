function solve(matrix) {

    // main diagonal sum
    let mainSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
    }

    // secondary diagonal sum
    let secondarySum = 0;
    for (let i = 0; i < matrix.length; i++) {
        secondarySum += matrix[i][matrix.length - 1 - i];
    }

    let output = [];
    output.push(mainSum, secondarySum);
    console.log(output.join(' '));
}

solve([
    [20, 40],
    [10, 60]
]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )