import { planYourTrip } from "./planYourTrip.js";
import { expect } from "chai";


describe('Suit tests', () => {
  // (destination, season, year) - A function that accepts three parameters: string, string, and number.
  it('tests choosingDestination', () => {

    expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
    expect(() => planYourTrip.choosingDestination('Borovetz', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');

    expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");

    expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
  });

  // (activities, activityIndex) - A function that accepts an array and number
  it('tests exploreOptions', () => {

    expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 0)).to.equal('Snowboarding, Winter Hiking');
    expect(planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 2)).to.equal('Skiing, Snowboarding');

    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], -1)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 3)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 4)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], '2')).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], '5')).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], '-5')).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(['Skiing', 'Snowboarding', 'Winter Hiking'], 1.5)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions('Skiing', 'Snowboarding', 'Winter Hiking', 1.5)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions(1.5, 1.5)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions('1.5', 1.5)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions('1.5', '1.5')).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions([], 0)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions('Skiing', 0)).to.throw('Invalid Information!');
    expect(() => planYourTrip.exploreOptions('Skiing', '0')).to.throw('Invalid Information!');
  });

  // (distanceInKilometers, fuelCostPerLiter) - A function that accepts two parameters: number, number.
  it('tests estimateExpenses', () => {


    expect(planYourTrip.estimateExpenses(10, 10)).to.equal("The trip is budget-friendly, estimated cost is $100.00.");
    expect(planYourTrip.estimateExpenses(10, 10.25)).to.equal("The trip is budget-friendly, estimated cost is $102.50.");
    expect(planYourTrip.estimateExpenses(10.5, 10.25)).to.equal("The trip is budget-friendly, estimated cost is $107.63.");

    expect(planYourTrip.estimateExpenses(100, 10)).to.equal("The estimated cost for the trip is $1000.00, plan accordingly.");
    expect(planYourTrip.estimateExpenses(100, 5.1)).to.equal("The estimated cost for the trip is $510.00, plan accordingly.");
    expect(planYourTrip.estimateExpenses(100.5, 10)).to.equal("The estimated cost for the trip is $1005.00, plan accordingly.");
    expect(planYourTrip.estimateExpenses(100, 10.5)).to.equal("The estimated cost for the trip is $1050.00, plan accordingly.");
    expect(planYourTrip.estimateExpenses(100.5, 10.5)).to.equal("The estimated cost for the trip is $1055.25, plan accordingly.");

    expect(() => planYourTrip.estimateExpenses(0, 1)).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses([], 1)).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses(1, [])).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses('1', 1)).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses(1, '1')).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses('1', '1')).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses('-1', '-1')).to.throw("Invalid Information!");
    expect(() => planYourTrip.estimateExpenses(-1, -1)).to.throw("Invalid Information!");


  });

});

/* estimateExpenses(distanceInKilometers, fuelCostPerLiter) {
    let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof fuelCostPerLiter !== "number" ||
      fuelCostPerLiter <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (totalCost <= 500) {
      return `The trip is budget-friendly, estimated cost is $${totalCost}.`;
    } else {
      return `The estimated cost for the trip is $${totalCost}, plan accordingly.`;
    }
  }, */