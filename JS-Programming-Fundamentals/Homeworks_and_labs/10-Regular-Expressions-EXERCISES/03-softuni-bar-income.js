function bar(arr) {
    let income = 0;
    let pattern =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|%$.0-9]*\|(?<count>\d+)\|[^%$.0-9]*(?<price>\d+\.?\d*)\$/;
    let command = arr.shift();

    while (command != 'end of shift') {
        let match = command.match(pattern);

        if (match != null) {

            let {customer, product, count, price} = match.groups;
            count = Number(count);
            price = Number(price);


            let totalPrice = count * price;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            income += totalPrice;
        }



        command = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

bar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift',
]);

bar([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift',
]);
