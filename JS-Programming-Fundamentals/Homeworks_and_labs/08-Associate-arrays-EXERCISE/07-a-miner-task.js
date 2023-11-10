function minerTask(arr) {
  // object to push new items in
  let r = {};

  for (let i = 0; i < arr.length; i += 2) {
    // walk around all items in the input with a step of 2
    let product = arr[i];
    let qty = Number(arr[i + 1]); //transform to NUM, otherwise we get string concatenation

    if (product in r) {
      // check if the product already exsists in our object, if so, ADD TO ITS qty, dont zero it out
      r[product] += qty;
    } else {
      // if the product does not exsist yet, just create it
      r[product] = qty;
    }
  }

  //   transform object to array to iterate it
  let entries = Object.entries(r);

  //   destructure + iterate + print the array as a final output
  for (const [product, qty] of entries) {
    console.log(`${product} -> ${qty}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
