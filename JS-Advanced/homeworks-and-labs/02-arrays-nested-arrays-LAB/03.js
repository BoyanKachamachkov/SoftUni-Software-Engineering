function solve(arr) {


    let res = '';
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    res = first + last;
    console.log(res);

}
solve(['20', '30', '40']);