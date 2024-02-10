import { expect } from 'chai';
import { motorcycleRider } from './Motorcycle Rider.js';

describe('Test suite', function () {
  describe('license restriction functionality', () => {
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
  });
});
