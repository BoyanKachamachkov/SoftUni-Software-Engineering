function solve(els) {

    let sum = els.reduce((a, v) => a + v, 0);
    let inverseSum = els.reduce((a, v) => a + 1 / v, 0);
    let concat = els.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);