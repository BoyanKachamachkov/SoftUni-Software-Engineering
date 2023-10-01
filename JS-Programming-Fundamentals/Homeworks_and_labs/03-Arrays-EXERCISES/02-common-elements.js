// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.

function solve(arr1, arr2) {
  //обхождаме масив1
  for (let i = 0; i < arr1.length; i++) {
    // буферна променлива
    let el = arr1[i];

    // сравняваме дали всеки индекс е същия с масив 2
    if (arr2.includes(el)) {
      // ако е същия, това е комън елемент;

      // принтираме всички съвпадения на отделен ред
      console.log(el);
    }
  }
}

solve(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);

//hello 4
