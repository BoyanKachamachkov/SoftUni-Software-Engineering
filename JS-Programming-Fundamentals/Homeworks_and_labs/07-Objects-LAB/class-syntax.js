/*
What are classes?
    -   factory to create objects (also classes are called templates)
    -   defines structure and behaviour (methods)
    -   *INSTANCE* class -> object created by the class
    -   "обекта е инстанция на еди кой си клас"
    -   a class has a *CONSTRUCTOR* - method called automatically to create the object
        -   it *PREPARES* the new object for use
        -   can receive parameteres and assign them to the object
        -   constructor is not mandatory (but it's mandatory to call it a constructor)
        -   Pascal case, not camelCase!!!
        -   this. points to the current *INSTANCE* that we create at the moment
        -   we create NEW instance by using "new + class name" and give arguments to the constructor

*/

class Dog {
  constructor(dogName, dogBreed) {
    this.name = dogName; //property
    this.bread = dogBreed; //property
    this.lovesToEat = true; //property
  }

  //methods are created in the class body!!
  bark() {
    console.log(`${this.name}: wof wof`);
  }
}

// Create instance of a Class -> instance = object
let firstDog = new Dog('Sharo', 'UlichnaPrevyzhodna');
let secondDog = new Dog('Balkan', 'BulgarianSheppard');

console.log(firstDog);
console.log(secondDog);

firstDog.bark();
secondDog.bark();

console.log(secondDog.lovesToEat);
