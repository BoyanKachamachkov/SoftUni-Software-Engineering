import { isSymmetric } from '../05-checkSymmetry.js';
import { assert } from 'chai';

describe('isSymmetric functionality tests', () => {
  it('should return false', () => {
    assert.equal(isSymmetric({}), false);
    assert.equal(isSymmetric([1, 2, 3]), false);
    assert.equal(isSymmetric([1, 2, 3, 4, 3, 3]), false);
    assert.equal(isSymmetric([-1, -2]), false);
    assert.equal(isSymmetric(['1', '2', '3', 3, 2, 1]), false);
  });

  it('should return true', () => {
    assert.equal(isSymmetric([]), true);
    assert.equal(isSymmetric([1, 2, 3, 3, 2, 1]), true);
    assert.equal(isSymmetric([0, 0, 0]), true);
  });
});
