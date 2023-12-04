function pig(arr) {
    let food = Number(arr.shift()) / 1000;
    let hay = Number(arr.shift()) / 1000;
    let cover = Number(arr.shift()) / 1000;
    let weight = Number(arr.shift()) / 1000;
    let hayCover = weight / 0.33;

    for (let i = 1; i < 30; i++) {
        food -= 300;

        if (i % 2 == 0) {
            hay -= food * 0.05;
        } else if (i % 3 == 0) {
            hay -= hayCover;
        }
    }

    console.log(food, cover, hay);
}
pig(['10', '5', '5.2', '1']);
