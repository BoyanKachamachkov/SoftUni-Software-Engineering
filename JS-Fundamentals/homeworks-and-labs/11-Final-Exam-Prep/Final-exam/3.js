function solve(input) {
    let followers = {};

    let command = input.shift();

    while (command !== 'Log out') {
        let tokens = command.split(': ');
        let action = tokens[0];
        let user = tokens[1];

        switch (action) {
            case 'New follower':
                if (user in followers) {
                    command = input.shift();
                    continue;
                } else {
                    followers[user] = { likes: 0, comments: 0 };
                }
                break;

            case 'Like':
                let count = Number(tokens[2]);

                if (user in followers) {
                    followers[user].likes += count;
                } else {
                    followers[user] = { likes: count, comments: 0 };
                }
                break;

            case 'Comment':
                if (user in followers) {
                    followers[user].comments += 1;
                } else {
                    followers[user] = { comments: 1, likes: 0 };
                }
                break;

            case 'Blocked':
                if (user in followers) {
                    delete followers[user];
                } else {
                    console.log(`${user} doesn't exist.`);
                }
                break;
        }

        command = input.shift();
    }

    let entries = Object.entries(followers);

    console.log(`${entries.length} followers`);

    entries.forEach((entry) =>
        console.log(`${entry[0]}: ${entry[1].comments + entry[1].likes}`)
    );
}

// solve([
//     'Like: Katy: 3',
//     'Comment: Katy',
//     'New follower: Bob',
//     'Blocked: Bob',
//     'New follower: Amy',
//     'Like: Amy: 4',
//     'Log out',
// ]);

// solve([
//     'New follower: George',
//     'Like: George: 5',
//     'New follower: George',
//     'Log out',
// ]);

solve([
    'Blocked: Amy',
    'Comment: Amy',
    'New follower: Amy',
    'Like: Tom: 5',
    'Like: Ellie: 5',
    'Log out',
]);
