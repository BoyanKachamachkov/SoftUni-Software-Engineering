function password(data) {
    let pattern =
        /(.{1,})>(?<nums>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<except>[^<>]{3})<\1/gm;
    let n = Number(data.shift());
    let password = '';

    for (let i = 0; i < n; i++) {
        let passwordToCheck = data[i];

        let match = pattern.exec(passwordToCheck);

        if (match != null) {
            let first = match.groups.nums;
            let second = match.groups.lower;
            let third = match.groups.upper;
            let fourth = match.groups.except;

            password = first + second + third + fourth;
            console.log(`Password: ${password}`);
        } else {
            console.log('Try another password!');
        }
        pattern.exec(passwordToCheck);
    }
}

password([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$',
]);
// password([
//     '5',
//     'aa>111|mqu|BAU|mqu<aa',
//     '()>111!aaa!AAA!^&*<()',
//     'o>088|abc|AAA|***<o',
//     'asd>asd|asd|ASD|asd<asd',
//     '*>088|zzzz|ZzZ|123<*',
// ]);
