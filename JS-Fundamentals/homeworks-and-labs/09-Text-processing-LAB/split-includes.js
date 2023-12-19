let text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor Tempora eius ratione iusto voluptatem! dolor Accusamus, exercitationem dicta nulla unde dignissimos  dolor obcaecati?';

  let sentences = text.split('. ')

  console.log(sentences);


  //Includes returns true/false to a string (diff than array type includes)
  let hasDolor = text.includes('dolor')
  console.log(hasDolor);