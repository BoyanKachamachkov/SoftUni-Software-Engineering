function furniture(arr) {
    let items = [];
    let totalPrice = 0;

    let command = arr.shift();
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    while (command != 'Purchase') {
        let match = command.match(pattern);

        if (match != null) {
            let { name, price, qty } = match.groups; //object destructuring
            price = Number(price);
            qty = Number(qty);

            // let name = match.groups.name;
            // let price = Number(match.groups.price);
            // let qty = Number(match.groups.qty);

            let furniturePrice = price * qty;
            totalPrice += furniturePrice;
            items.push(name);
        }

        command = arr.shift();
    }

    console.log('Bought furniture:');
    if (items.length > 1) {
        for (let fur of items) {
            console.log(fur);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase',
]);

furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);
