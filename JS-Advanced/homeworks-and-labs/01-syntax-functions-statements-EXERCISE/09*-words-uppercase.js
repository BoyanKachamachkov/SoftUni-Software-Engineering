function words(string) {

    let pattern = /[a-zA-Z]+/gm;
    let newStr = string.toUpperCase();
    let matches = pattern.exec(newStr);
    let res = [];
    while (matches !== null) {
        res.push(matches);
        matches = pattern.exec(newStr);
    }
    console.log(res.join(', '));

}
words('Hi, how are you?'); //HI, HOW, ARE, YOU
words('hello')
