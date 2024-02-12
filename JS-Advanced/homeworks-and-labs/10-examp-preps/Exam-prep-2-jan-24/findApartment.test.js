import { findNewApartment } from './findApartment.js';
import { expect } from 'chai';

describe('apartment tests', () => {
    it('isGoodLocation', () => {
        expect(() => { findNewApartment.isGoodLocation('Sofia', 1); }).to.throw("Invalid input!");
        expect(() => { findNewApartment.isGoodLocation(1, true); }).to.throw("Invalid input!");
        expect(findNewApartment.isGoodLocation('Pernik', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
    });


    it('isLargeEnough', () => {

        expect(() => { findNewApartment.isLargeEnough(1, 50); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([], 60); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isLargeEnough([40, 50, 60], '1'); }).to.throw('Invalid input!');
        expect(findNewApartment.isLargeEnough([35, 45, 55, 120], 50)).to.equal('55, 120');
        expect(findNewApartment.isLargeEnough([30, 40, 50, 60, 70], 80)).to.equal('');
        expect(findNewApartment.isLargeEnough([40, 50, 55, 20], 55)).to.equal('55');

    });


    it('isItAffordable', () => {

        expect(() => { findNewApartment.isItAffordable('50', 50); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(50, '50'); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable('50', '50'); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(0, 0); }).to.throw('Invalid input!');
        expect(() => { findNewApartment.isItAffordable(-50, -50); }).to.throw('Invalid input!');
        expect(findNewApartment.isItAffordable(500, 5000)).to.equal('You can afford this home!');
        expect(findNewApartment.isItAffordable(5000, 500)).to.equal('You don\'t have enough money for this house!');
    });
});