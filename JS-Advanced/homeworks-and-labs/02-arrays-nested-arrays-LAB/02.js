function solve(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {

        let sum = 0;
        for (let j = 1; j <= k && i - j >= 0; j++) {
            sum += sequence[i - j];
        }
        sequence.push(sum);
    }
    return sequence;
}
solve(6, 3); //[1, 1, 2, 4, 7, 13]
solve(8, 2); //[1, 1, 2, 3, 5, 8, 13, 21]