function solve(arr) {

    let res = [];

    for (const element of arr) {

        if (element < 0) {
            res.unshift(element);
        } else {
            res.push(element);
        }
    }

    for (const el of res) {
        console.log(el);
    }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);