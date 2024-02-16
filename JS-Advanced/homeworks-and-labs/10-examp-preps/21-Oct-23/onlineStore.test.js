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


  // number (productp price) , number (acc balance)
  it('canAffordProduct functionality', () => {

    expect(() => onlineStore.canAffordProduct('1', 1)).to.throw('Invalid input.');
    expect(() => onlineStore.canAffordProduct(1, '1')).to.throw('Invalid input.');
    expect(onlineStore.canAffordProduct(1, 1)).to.equal('Product purchased. Your remaining balance is $0.');
    expect(onlineStore.canAffordProduct(2, 1)).to.equal('You don\'t have sufficient funds to buy this product.');



  });


  // array of objects (all products) and a STRING (category)
  it('getRecommendedProducts functionality', () => {

    expect(() => onlineStore.getRecommendedProducts('1', 'Beer')).to.throw('Invalid input.');
    expect(() => onlineStore.getRecommendedProducts([{ name: 'Beer', category: 'Alcohol' }], 1)).to.throw('Invalid input.');

    expect(onlineStore.getRecommendedProducts([
      { name: 'Beer', category: 'Alcohol' },
      { name: 'Whiskey', category: 'Alcohol' },
    ]
      , 'Alcohol')).to.equal(
        `Recommended products in the Alcohol category: Beer, Whiskey`);

    expect(onlineStore.getRecommendedProducts([
      { name: 'Beer', category: 'Alcohol' },
      { name: 'Whiskey', category: 'Alcohol' },
    ]
      , 'Photography')).to.equal(
        `Sorry, we currently have no recommended products in the Photography category.`);


  });
});