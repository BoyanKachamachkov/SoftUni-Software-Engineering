function sameNums(num) {
    let numString = String(num);
    let sum = 0;
    let isSame = true;
    let firstChar = numString[0];
    for (let i = 0; i < numString.length; i++) {
        if (numString[i] !== firstChar) {
            isSame = false;
        }
        sum += Number(numString[i]);
    }


    console.log(isSame);
    console.log(sum);
}
sameNums(2222222);
sameNums(1234);
