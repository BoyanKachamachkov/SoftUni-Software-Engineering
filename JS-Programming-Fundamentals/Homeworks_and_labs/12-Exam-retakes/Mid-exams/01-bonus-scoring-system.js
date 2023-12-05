function solve(arr) {
    let studs = Number(arr.shift());
    let lecturesNum = Number(arr.shift());
    let bonus = Number(arr.shift());

    let maxBonus = [];

    for (let i = 0; i < studs; i++) {
        let countOfAttendances = Number(arr[i]);
        let totalBonus = (countOfAttendances / lecturesNum) * (5 + bonus);
        maxBonus.push(Math.ceil(totalBonus));
    }

    let lectures = arr
        .slice(0, arr.length)
        .map(Number)
        .sort((a, b) => b - a);
    maxBonus = maxBonus.sort((a, b) => b - a);

    console.log(`Max Bonus: ${maxBonus[0]}.`);
    console.log(`The student has attended ${lectures[0]} lectures.`);
}

solve(['5', '25', '30', '12', '19', '24', '16', '20']);
solve([
    '10',
    '30',
    '14',
    '8',
    '23',
    '27',
    '28',
    '15',
    '17',
    '25',
    '26',
    '5',
    '18',
]);
