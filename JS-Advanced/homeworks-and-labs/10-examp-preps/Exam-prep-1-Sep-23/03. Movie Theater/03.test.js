import { movieTheater } from "./03. Movie Theater.js";
import { expect } from 'chai';

describe('Suit tests', () => {
  it('test ageRestrictions', () => {
    expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
    expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
    expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
    expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
    expect(movieTheater.ageRestrictions()).to.equal(`There are no age restrictions for this movie`);
  });

  it('test moneySpent functionality', () => {
    expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 29.50`);
    expect(movieTheater.moneySpent(3, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 47.60`);

    expect(() => movieTheater.moneySpent('1', ['Nachos'], ['Water'])).to.throw('Invalid input');
    expect(() => movieTheater.moneySpent(1, 'Nachos', ['Water'])).to.throw('Invalid input');
    expect(() => movieTheater.moneySpent(1, ['Nachos'], '2')).to.throw('Invalid input');
  });


  // A function that accepts array and number.
  it('test reservation funcionality', () => {
    expect(() => movieTheater.reservation('1', 1)).to.throw('Invalid input');
    expect(() => movieTheater.reservation([2], '1')).to.throw('Invalid input');

    expect(movieTheater.reservation([
      { rowNumber: 1, freeSeats: 2 },
      { rowNumber: 2, freeSeats: 2 },
    ], 1)).to.equal(2);

  });
});