function solve(arr) {
    let n = Number(arr[0]);
    let budg = Number(arr[1]);
    let people = Number(arr[2]);
    let priceKm = Number(arr[3]);
    let foodExp = Number(arr[4]);
    let roomExp = Number(arr[5]);

    let totalExp = (foodExp + roomExp) * people * n;
    if (people > 10) {
        totalExp *= 0.75;
    }

    for (let i = 0; i < n; i++) {
        let kmDay = Number(arr[i + 6]);
        totalExp += kmDay * priceKm;

        if (i % 3 == 0 || i % 5 == 0) {
            let additionalExp = 0.4 * totalExp;
            totalExp += additionalExp;
        } else if (i % 7 == 0) {
            let money = totalExp / people;
            totalExp -= money;
        }

        if (budg - totalExp <= 0) {
            console.log(
                `Not enough money to continue the trip. You need ${(
                    totalExp - budg
                ).toFixed(2)}$ more.`
            );
            return;
        }
    }
    console.log(
        `You have reached the destination. You have ${(budg - totalExp).toFixed(
            2
        )}$ budget left.`
    );
}

// solve([
//     '7',
//     '12000',
//     '5',
//     '1.5',
//     '10',
//     '20',
//     '512',
//     '318',
//     '202',
//     '154',
//     '222',
//     '108',
//     '123',
// ]);

solve([
    '10',
    '20500',
    '11',
    '1.2',
    '8',
    '13',
    '100',
    '150',
    '500',
    '400',
    '600',
    '130',
    '300',
    '350',
    '200',
    '300',
]);
