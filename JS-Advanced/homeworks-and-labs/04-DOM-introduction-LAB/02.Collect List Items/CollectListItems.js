function extractText() {

  const list = document.getElementById('items');
  const items = Array.from(list.children);

  const output = items.map(li => li.textContent).join('\n');

  const result = document.getElementById('result')
  result.value = output;
}
