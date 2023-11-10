// string searching
let text = "random text random text  random text";
let textIndex = text.indexOf("text"); //returns first occurance of index of "t" //7

//second text
let secondText = text.indexOf("text", textIndex + 1); //19 index, it skips the first occurance

//lastIndexOf
let lastText = text.lastIndexOf("text"); //26 finds the first occurance backwards

//get all indexes
let index = text.indexOf("random");

while (index >= 0) {
    //when it cant find it, it returns "-1" which breaks the cycle
  console.log("random found on " + index + " position");

  index = text.indexOf("random", index + 1);
}


