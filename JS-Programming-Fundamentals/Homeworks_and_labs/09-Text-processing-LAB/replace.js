let text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor Tempora eius ratione iusto voluptatem! dolor Accusamus, exercitationem dicta nulla unde dignissimos  dolor obcaecati?';

//word to replace , replacement 
//works only on first occurence
  let replacedDolor = text.replace('dolor', 'softuni')
  console.log(replacedDolor);

//   Replace all?
let replacedAllDolor = text;
while(replacedAllDolor.indexOf('dolor')>= 0){
    replacedAllDolor = replacedAllDolor.replace('dolor', 'softuni')
}

console.log(replacedAllDolor);