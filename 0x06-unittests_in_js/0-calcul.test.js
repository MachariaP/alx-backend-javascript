// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when a = 1.4 and b = 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when a = 1.5 and b = 2.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return 6 when a = 1.8 and b = 4.3', () => {
    assert.strictEqual(calculateNumber(1.8, 4.3), 6);
  });

  it('should return 0 when a = -0.4 and b = 0.4', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should return -3 when a = -1.5 and b = -2.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });
});
