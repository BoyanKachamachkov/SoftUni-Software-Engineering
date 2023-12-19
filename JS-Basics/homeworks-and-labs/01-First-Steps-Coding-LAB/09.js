function green(input) {
  let totalPrice = input[0] * 7.61;
  let discountAmount = 0.18 * totalPrice;
  let finalPrice = totalPrice - discountAmount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discountAmount} lv.`);
}
