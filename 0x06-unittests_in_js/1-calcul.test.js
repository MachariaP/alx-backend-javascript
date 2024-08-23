// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when type is SUM, a = 1.4 and b = 2.6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('should return 5 when type is SUM, a = 1.5 and b = 2.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });

    it('should return 6 when type is SUM, a = 1.8 and b = 4.3', () => {
      assert.strictEqual(calculateNumber('SUM', 1.8, 4.3), 6);
    });

    it('should return 0 when type is SUM, a = -0.4 and b = 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });

    it('should return -3 when type is SUM, a = -1.5 and b = -2.5', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when type is SUBTRACT, a = 1.4 and b = 2.6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
    });

    it('should return -1 when type is SUBTRACT, a = 1.5 and b = 2.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
    });

    it('should return -2 when type is SUBTRACT, a = 1.8 and b = 4.3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.8, 4.3), -2);
    });

    it('should return 0 when type is SUBTRACT, a = -0.4 and b = 0.4', () => {
        const result = calculateNumber('SUBTRACT', -0.4, 0.4);
        assert.strictEqual(Object.is(result, 0) || Object.is(result, -0), true);
    });
  

    it('should return 1 when type is SUBTRACT, a = -1.5 and b = -2.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), 1);
    });
  });

  describe('DIVIDE', () => {
    it('should return ~0.33 when type is DIVIDE, a = 1.4 and b = 2.6', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.6).toFixed(2), (1/3).toFixed(2));
    });

    it('should return ~0.67 when type is DIVIDE, a = 1.5 and b = 2.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2.5).toFixed(2), (2/3).toFixed(2));
    });

    it('should return 0.5 when type is DIVIDE, a = 1.8 and b = 4.3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.8, 4.3), 0.5);
    });

    it('should return 0.5 when type is DIVIDE, a = -1.5 and b = -2.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -2.5), 0.5);
    });

    it('should return "Error" when type is DIVIDE, a = -0.4 and b = 0.4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -0.4, 0.4), 'Error');
    });

    it('should return 1 when type is DIVIDE, a = 1.4 and b = 0.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.5), 1);
    });
  
  });
});
