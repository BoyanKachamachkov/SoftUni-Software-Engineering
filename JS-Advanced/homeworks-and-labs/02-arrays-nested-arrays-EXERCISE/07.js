// function solve(arr) {
//     let output = [];
//     for (let i = 0; arr.length > 0; i++) {
//         if (i % 2 == 0) {
//             let min = Math.min(...arr);
//             let idx = arr.indexOf(min);
//             arr.splice(idx, 1);
//             output.push(min);

//         } else {
//             let max = Math.max(...arr);
//             let idx = arr.indexOf(max);
//             arr.splice(idx, 1);
//             output.push(max);
//         }
//     }
//     return output;
// }
// solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// //[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
// solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);


function solve(arr) {

    let res = [];

    arr.sort((a, b) => a - b);
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {

        res.push(arr[i]);
        res.push(arr[arr.length - (1 + i)]);

        if (arr.length % 2 !== 0 && i + 1 === Math.floor(arr.length / 2)) {
            res.push(arr[arr.length - (i + 2)]);
        }
    }
    return res;
}
// solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
solve([11, 91, 18]);
