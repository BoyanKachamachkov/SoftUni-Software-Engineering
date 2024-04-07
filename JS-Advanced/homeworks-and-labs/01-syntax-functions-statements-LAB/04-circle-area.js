function solve(arg) {

    if (typeof arg == 'number') {
        let res = Math.pow(arg, 2) * Math.PI;
        console.log(res.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (arg)}.`);
    }
}

solve(5);
solve('name');
