function strSubstr(word, text) {
    text = text.toLowerCase().split(' '); //transfer text to arr and split by space + lower case all

    //use includes for arr to check

    if (text.includes(word)) {
        console.log(word);
        return;
    } else {
        console.log(`${word} not found!`);
    }
}
strSubstr('javascript', 'JavaScript is the best programming language');
strSubstr('python', 'JavaScript is the best programming language');
