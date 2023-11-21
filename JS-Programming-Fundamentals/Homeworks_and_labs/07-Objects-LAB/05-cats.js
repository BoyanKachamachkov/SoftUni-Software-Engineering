function createCats(arr){

class Cat {
  constructor(name, age){

    this.name = name;
    this.age = age;
  }

  meow(){
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}
  for(line of arr){
    let args = line.split(' ');

    let name = args[0];
    let age = Number(args[1]);

    let cat = new Cat(name,age);
    cat.meow();
    
  }



}



createCats(['Mellow 2', 'Tom 5']);
