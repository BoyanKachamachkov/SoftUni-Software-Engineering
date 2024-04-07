function stars(num) {
    let star = '* ';

    for (let i = 0; i < num; i++) {
        console.log(star.repeat(num));
    }
}


stars(1);
stars(2);
stars(5);