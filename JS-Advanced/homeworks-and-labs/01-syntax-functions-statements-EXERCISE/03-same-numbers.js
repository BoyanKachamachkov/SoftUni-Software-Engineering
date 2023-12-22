function sameNums(num) {
    let numString = String(num);
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < numString.length; i++) {
        let el = Number(numString[i]);
        let nextEl = Number(numString[i + 1]);
        sum += el;

        if (el != el) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}
sameNums(2222222);
sameNums(1234);
