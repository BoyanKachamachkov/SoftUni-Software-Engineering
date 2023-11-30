// product = [
//     {name: 'apple', expdate: '10/12/23', kcal 200}
//     {name: 'apple', expdate: '10/12/23', kcal 200}
//     {name: 'apple', expdate: '10/12/23', kcal 200}
// ]
function adAstra(arr) {
    let str = arr.shift();
    let pattern =
        /([#|])(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let totalKcals = 0;
    let products = []; //arr with objects for each food

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let { name, expdate, kcal } = match.groups;

        products.push({ name, expdate, kcal }); //creates objs and takes their values (short syntax )
        totalKcals += Number(kcal);
    }

    let days = Math.floor(totalKcals / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    products.forEach((product) =>
        console.log(
            `Item: ${product.name}, Best before: ${product.expdate}, Nutrition: ${product.kcal}`
        )
    );
}
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
