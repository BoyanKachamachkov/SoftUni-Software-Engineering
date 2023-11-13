function pwGenerator(arr) {
    let [str1, str2, replacementStr] = arr;
    let concatedStr = str1 + str2;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let idx = 0;

    for (let char of concatedStr) {
        if (vowels.includes(char)) {
            concatedStr = concatedStr.replace(
                char,
                replacementStr[idx].toUpperCase()
            );
            idx++;

            if (idx == replacementStr.length) {
                idx = 0;
            }
        }
    }

    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

// pwGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
pwGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// pwGenerator(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
