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

console.log(solve(6,3)) 