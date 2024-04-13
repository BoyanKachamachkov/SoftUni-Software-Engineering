function validityChecker(x1, y1, x2, y2) {

    const calcFunc = (x1, y1, x2, y2) => {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let result = '';

        if (Number.isInteger(distance)) {
            result = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            result = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }

        console.log(result);
    };

    calcFunc(x1, y1, 0, 0);
    calcFunc(x2, y2, 0, 0);
    calcFunc(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);;
