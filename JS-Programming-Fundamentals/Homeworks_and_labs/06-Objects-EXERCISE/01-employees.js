function employees(arr) {
  for (const employeeName of arr) {
    let employee = { name: employeeName, personalNum: employeeName.length };

    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNum} `
    );
  }
}
