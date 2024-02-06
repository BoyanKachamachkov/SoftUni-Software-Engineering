import { sum } from '../04-sumOfNumbers.js';
import { assert } from 'chai';

describe('sum functionality tests', () =>{

  it('should sum the array', () =>{

    assert.equal(sum([1,2,3]), 6)
  })
});
