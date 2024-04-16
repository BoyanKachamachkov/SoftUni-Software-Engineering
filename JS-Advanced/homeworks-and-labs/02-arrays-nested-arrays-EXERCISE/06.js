function solve(arr) {

    let sortedArr = arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedArr.length; i++) {

        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);

// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
