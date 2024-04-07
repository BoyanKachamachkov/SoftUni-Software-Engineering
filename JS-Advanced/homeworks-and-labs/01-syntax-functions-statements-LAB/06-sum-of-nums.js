function solve(n, m) {
    let res = 0;
    let num1 = Number(n);
    let num2 = Number(m);

    for (let i = num1; i <= num2; i++) {
        res += i;
    }
    return res;
}

solve('1', '5');
