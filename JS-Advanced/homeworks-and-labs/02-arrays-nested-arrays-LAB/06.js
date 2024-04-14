function solve(arr) {

    arr.sort((a, b) => a - b);

    let res = arr.slice(arr.length / 2);
    return res;

}
solve([4, 7, 2, 5]); // [5, 7]