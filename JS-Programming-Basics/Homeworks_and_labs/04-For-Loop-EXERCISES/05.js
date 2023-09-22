function salary(input) {
  let tabsOpen = Number(input[0]); //10
  let salary = Number(input[1]); //750

  let punishment = 0;

  for (let i = 2; i <= input.length - 1; i++) {
    let currentTab = input[i];

    if (currentTab === 'Facebook') {
      punishment += 150;
    } else if (currentTab === 'Instagram') {
      punishment += 100;
    } else if (currentTab === 'Reddit') {
      punishment += 50;
    }
  }

  if (punishment >= salary) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(`${salary - punishment}`);
  }
}
