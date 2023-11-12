function hardWords(arr) {
    let [letter, fillerWords] = arr;
    let letterWords = letter.split(' '); //new arr with each word
    let filteredWords = letterWords.filter((word) => word.includes('_')); //new arr with _

    for(let slot of filteredWords){

        if(!slot.endsWith('_')){
            slot = slot.slice(0, slot.length -1); //for edge case slots that end with , .
        }

        //all slots are prepared

        let wordToFill = fillerWords.find(word => word.length == slot.length) //check from arr with fillers for length coincidence
            letter = letter.replace(slot, wordToFill) //replace the occurrence with the matching word
    
    }

    console.log(letter);
}

hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
