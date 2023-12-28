function sumTable() {

  const costs = document.querySelectorAll('td:nth-child(2)')

  const arrCosts = Array.from(costs)
  const lastEl = arrCosts.pop();
  const sum = arrCosts.reduce((a,v) => a + Number(v.textContent),0);

  const output = document.getElementById('sum')
  output.textContent = sum;
}