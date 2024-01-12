function gcd(firstNum, secondNum) {
    while(secondNum){
        // while its above 0
        const temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum );
}

gcd(15, 5);
gcd(2154, 458);
