function solve(arr) {

    let res = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 != 0) {
            res.push(arr[i]);
        }
    }
    res.reverse();
    let output = res.map(x => x *= 2);
    return output;

}
solve([10, 15, 20, 25]);