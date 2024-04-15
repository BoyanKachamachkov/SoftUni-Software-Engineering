function solve(arr, n) {

    let res = [];
    for (let i = 0; i < arr.length; i += n) {

        res.push(arr[i]);
    }
    return res;
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);