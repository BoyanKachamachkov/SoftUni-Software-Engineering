function lastK(length, k) {
  let sequence = [1];

  for (let i = 1; i < length; i++) {
    let index = Math.max(sequence.length - k, 0); //индекс изчисление от което ще започнем да режем, ако е отрицателно число, започваме от 0 индекс, ще е отрицателно 2 итерации

    let lastElements = sequence.slice(index); //временен масив, в който съхраняваме последните 3 елемента преди да ги сумираме и пушнем

    let sum = 0;
    for (const el of lastElements) {
      //минаваме през временния масив и сумираме всички стойности
      sum += el;
    }

    sequence.push(sum);
  }
  console.log(sequence.join(' '));
}
lastK(6, 3);
