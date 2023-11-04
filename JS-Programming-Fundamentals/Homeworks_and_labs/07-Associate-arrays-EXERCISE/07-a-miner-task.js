/*
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in the format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000].


*/

function minerTask(arr) {
  let r = {};

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let qty = Number(arr[i + 1]);

    if (product in r) {
      r[product] += qty;
    } else {
      r[product] = qty;
    }
  }

  let entries = Object.entries(r);
  for (const [product, qty] of entries) {
    console.log(`${product} -> ${qty}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
