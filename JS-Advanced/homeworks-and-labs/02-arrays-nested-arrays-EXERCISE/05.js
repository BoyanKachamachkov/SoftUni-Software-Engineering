// function solve(arr) {

//     let output = [];
//     let biggest = 0;

//     for (let num of arr) {
//         if (num >= biggest) {
//             output.push(num);
//             biggest = num;
//         }
//     }

//     return output;
// }


// 2nd solution
function solve(arr) {
    let biggest = arr[0];

    res = arr.reduce((acc, currentElement) => {
        if (biggest <= currentElement) {
            acc.push(currentElement);
            biggest = currentElement;
        }
        return acc;
    }, []);

    return res;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);