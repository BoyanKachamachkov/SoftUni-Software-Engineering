function bakeryReport(input) {
    let clients = {};
    let distributors = {};

    for (const line of input) {
        if (line === 'End') {
            break;
        }

        const [command, name, amount] = line.split(' ');

        switch (command) {
            case 'Deliver':
                if (!distributors.hasOwnProperty(name)) {
                    distributors[name] = 0;
                }
                distributors[name] += parseFloat(amount);
                break;

            case 'Return':
                if (
                    distributors.hasOwnProperty(name) &&
                    distributors[name] >= parseFloat(amount)
                ) {
                    distributors[name] -= parseFloat(amount);
                    if (distributors[name] === 0) {
                        delete distributors[name];
                    }
                }
                break;

            case 'Sell':
                if (!clients.hasOwnProperty(name)) {
                    clients[name] = 0;
                }
                clients[name] += parseFloat(amount);
                break;
        }
    }

    // Print clients
    for (const client in clients) {
        console.log(`${client}: ${clients[client].toFixed(2)}`);
    }
    console.log('-----------');

    // Print distributors
    for (const distributor in distributors) {
        console.log(`${distributor}: ${distributors[distributor].toFixed(2)}`);
    }
    console.log('-----------');

    // Print total income
    let totalIncome = Object.values(clients).reduce(
        (sum, amount) => sum + amount,
        0
    );
    console.log(`Total Income: ${totalIncome.toFixed(2)}`);
}

// Example usage

// bakeryReport([
//     'Deliver North 200.30',
//     'Sell Peter 30.20',
//     'Return Macro 5000.00',
//     'Return North 100.30',
//     'Sell Peter 50.50',
//     'End',
// ]);

bakeryReport([
    'Deliver Micro 10000.00',
    'Sell Nick 500.00',
    'Sell Antony 260.50',
    'Deliver Micro 2000.50',
    'End',
]);

bakeryReport([
    'Deliver North 200.30',
    'Deliver Micro 10000.00',
    'Deliver North 150.50',
    'End',
]);
