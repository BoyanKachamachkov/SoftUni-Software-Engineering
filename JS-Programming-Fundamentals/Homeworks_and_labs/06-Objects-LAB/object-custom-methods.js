// METHODS
// Function inside an object is called an Object method!
function dogSleep() {
  console.log(`zzz.....`);
}

function dogSleep() {
  console.log(`zzz...`);
}

let dog = {
  name: 'Balkan',
  bark: function () {
    //declare with normal funciton
    console.log('woof woof');
  },
  eat: () => console.log(`Yummy`), //declare with arrow func

  sleep: dogSleep, //declare with external func

  // Object method notation (most used way)
  play() {
    console.log(`Playing with dog`);
  },
};

dog.bark();
dog.eat();
dog.sleep();
dog.play();
dog.run = () => {
  console.log(`Running`);
};

dog.run();
