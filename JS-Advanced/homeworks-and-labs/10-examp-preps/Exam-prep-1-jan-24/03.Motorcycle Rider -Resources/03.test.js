import { expect } from 'chai';
import { motorcycleRider } from './Motorcycle Rider.js';

describe('Test suite', function () {
  // test method 1
  describe('licenseRestriction functionality', () => {
    it('returns correct output for AM', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal(
        'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      );
    });

    it('returns correct output for A1', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal(
        'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      );
    });

    it('returns correct output for A2', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal(
        'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      );
    });

    it('returns correct output for A', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal(
        'No motorcycle restrictions, and the minimum age is 24.'
      );
    });

    it('throws an error for invalid input string', () => {
      // трябва да подадем функция на експекта, за да може вътрешно да го рънне в try/catch, иначе го изпълняваме в момента в който пишем експекта, което ще хвърли грешка и теста няма да мине
      expect(() => motorcycleRider.licenseRestriction('Z')).to.throw();
    });

    it('throws an error for invalid input number', () => {
      expect(() => motorcycleRider.licenseRestriction(5)).to.throw();
    });
  });

  // test method 2
  describe('motorcycleShowroom functionality', () => {
    it('returns 1 element from the array', () => {
      expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal(
        'There are 1 available motorcycles matching your criteria!'
      );
    });

    it('returns all elements from the array', () => {
      expect(motorcycleRider.motorcycleShowroom(['50', '51'], 100)).to.equal(
        'There are 2 available motorcycles matching your criteria!'
      );
    });

    it('returns only matching elements from the array', () => {
      expect(motorcycleRider.motorcycleShowroom(['50', '51'], 50)).to.equal(
        'There are 1 available motorcycles matching your criteria!'
      );
    });

    // test with wrong param  1
    it('throws for non-array', () => {
      expect(() => motorcycleRider.motorcycleShowroom('50', 50)).to.throw(
        'Invalid Information!'
      );
    });

    // test with wrong param 2
    it('throws for non-number', () => {
      expect(() => motorcycleRider.motorcycleShowroom(['50'], '50')).to.throw(
        'Invalid Information!'
      );
    });
  });

  // test method 3
  describe('otherSpendings functionality', () => {
    // happy path w/o disc
    it('returns correct sum without discount', () => {
      expect(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['engine oil', 'oil filter'],
          false
        )
      ).to.equal('You spend $600.00 for equipment and consumables!');
    });

    // happy path with disc
    it('returns correct sum with 10% discount', () => {
      expect(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['engine oil', 'oil filter'],
          true
        )
      ).to.equal(
        'You spend $540.00 for equipment and consumables with 10% discount!'
      );
    });

    // 3 more tests for each param invalid
    it('throws an error for non-array 1st parameter', () => {
      expect(() =>
        motorcycleRider.otherSpendings('1', ['engine oil'], true)
      ).to.throw('Invalid Information!');
    });
    it('throws an error for non-array 2nd parameter', () => {
      expect(() =>
        motorcycleRider.otherSpendings(['helmet'], 50, false)
      ).to.throw('Invalid Information!');
    });
    it('throws an error for non-boolean 3rd parameter', () => {
      expect(() =>
        motorcycleRider
          .otherSpendings(['helmet'], ['oil filter'], ['random'])
          .to.throw('Invalid Information!')
      );
    });
  });
});
