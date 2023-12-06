function heart(arr) {
    let x = arr.shift();

    let com = arr.shift();
    while (com != 'Love!') {
        console.log(com);
        let tokens = com.split(' ');
        let idx = Number(tokens[1]);

        console.log(tokens);
        console.log(idx);


        com = arr.shift();
    }
}

heart(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
