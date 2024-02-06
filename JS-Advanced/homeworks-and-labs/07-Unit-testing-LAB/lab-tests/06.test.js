import { rgbToHexColor } from '../06-rgbToHex.js';
import { assert } from 'chai';

/* •	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
•	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
•	Return undefined if any of the input parameters are of an invalid type or not in the expected range
 */

describe('rgbToHexColor functionality tests', () => {
  it('should return undefined', () => {
    assert.isUndefined(rgbToHexColor('1', 1, 1));
    assert.isUndefined(rgbToHexColor(1, '1', 1));
    assert.isUndefined(rgbToHexColor(1, 1, '1'));
    assert.isUndefined(rgbToHexColor(1.5, 1, 1));
    assert.isUndefined(rgbToHexColor(1, 1.5, 1));
    assert.isUndefined(rgbToHexColor(1, 1, 1.5));
    assert.isUndefined(rgbToHexColor(-5, 5, 5));
    assert.isUndefined(rgbToHexColor(5, -5, 5));
    assert.isUndefined(rgbToHexColor(5, 5 - 5));
    assert.isUndefined(rgbToHexColor(50, 50, 350));
    assert.isUndefined(rgbToHexColor(50, 350, 50));
    assert.isUndefined(rgbToHexColor(350, 50, 50));
  });

  it('Return the same color in hexadecimal format as a string', () => {
    assert.equal(rgbToHexColor(50,50,50), '#323232')
    assert.equal(rgbToHexColor(0,0,0), '#323232')
    assert.equal(rgbToHexColor(255,255,255), '#323232')
  });
});
