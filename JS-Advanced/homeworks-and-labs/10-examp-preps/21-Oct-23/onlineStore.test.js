import { onlineStore } from "./onlineStore.js";
import { expect } from 'chai';


describe('Test suits', () => {
  // a string representing a product and a number representing the stock quantity.
  it('isProductAvailable functionality', () => {

    expect(() => onlineStore.isProductAvailable(1, 5)).to.throw('Invalid input.');
    expect(() => onlineStore.isProductAvailable('1', '5')).to.throw('Invalid input.');

    expect(onlineStore.isProductAvailable('Beer', 5)).to.equal(`Great! Beer is available for purchase.`);
    expect(onlineStore.isProductAvailable('Beer', 0)).to.equal(`Sorry, Beer is currently out of stock.`);



  });


  // it('canAffordProduct functionality', () => {

  // });



  // it('etRecommendedProducts functionality', () => {

  // });
});