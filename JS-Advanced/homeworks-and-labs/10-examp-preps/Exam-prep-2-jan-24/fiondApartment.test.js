import { findNewApartment } from './findApartment.js';
import { expect } from 'chai';

describe('Test suits for funcitonality', function () {
  describe('isGoodLocation funcionality tests', () => {
    it('test with valid city and boolean true', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(
        'You can go on home tour!'
      );
    });

    it('test with city different than Sofia, Plovdiv or Varna', () => {
      expect(findNewApartment.isGoodLocation('Pleven', true)).to.equal(
        'This location is not suitable for you.'
      );
    });

    it('test with nearPublicTransportaion as false', () => {
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal(
        'There is no public transport in area.'
      );
    });

    it('validate the input, if not string and boolean, throw', () => {
      expect(() => {findNewApartment.isGoodLocation(4, [])}).to.throw(
        'Invalid input!'
      );
    });
  });
});
