function solve(str) {
    let res = 0;

    switch (str) {
        default:
            console.log('error');
            return;

        case 'Monday':
            res = 1;
            break;

        case 'Tuesday':
            res = 2;
            break;

        case 'Wednesday':
            res = 3;
            break;

        case 'Thursday':
            res = 4;
            break;

        case 'Friday':
            res = 5;
            break;

        case 'Saturday':
            res = 6;

            break;

        case 'Sunday':
            res = 7;
            break;
    }
    console.log(res);
}

solve('Monday');
solve('Friday');
solve('Invalid');
