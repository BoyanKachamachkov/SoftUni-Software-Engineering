function companyUsers(arr) {
  // empty object to store kvp
  //  -   each company is the key -> the value of that key is an ARRAY that contains all UNIQUE IDs
  let companyList = {};

  // iterate through data
  for (const companyEmployee of arr) {
    let [company, id] = companyEmployee.split(" -> ");

    if (company in companyList) {
      if (!companyList[company].includes(id)) {
        //if the emp. is not yet in the list, add him, if he exsists, dont do anything
        companyList[company].push(id);
      }
    } else {
      companyList[company] = [id]; //for new company just create arr with first ID
    }
  }

  // transform the OBJ to ARR + sort by NAME in ASC order
  let entries = Object.entries(companyList).sort((a,b)=> a[0].localeCompare(b[0]));

  // Print in specific format
  for (const [name, ids] of entries) {
console.log(name);
  ids.forEach(id => console.log(`-- ${id}`))
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
