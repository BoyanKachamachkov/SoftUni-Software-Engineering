function cooking(num, op1, op2, op3, op4, op5) {

    num = applyOperation(num, op1);
    console.log(num);
    num = applyOperation(num, op2);
    console.log(num);
    num = applyOperation(num, op3);
    console.log(num);
    num = applyOperation(num, op4);
    console.log(num);
    num = applyOperation(num, op5);
    console.log(num.toFixed(2));


    function applyOperation(n, op) {
        switch (op) {
            case 'chop': n /= 2; break;
            case 'dice': n = Math.sqrt(n); break;
            case 'spice': n += 1; break;
            case 'bake': n *= 3; break;
            case 'fillet': n *= 0.8; break;
        }
        return n;
    }

}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
