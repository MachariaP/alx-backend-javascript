// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when type is SUM, a = 1.4 and b = 2.6', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });

    it('should return 5 when type is SUM, a = 1.5 and b = 2.5', () => {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });

    it('should return 6 when type is SUM, a = 1.8 and b = 4.3', () => {
      expect(calculateNumber('SUM', 1.8, 4.3)).to.equal(6);
    });

    it('should return 0 when type is SUM, a = -0.4 and b = 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });

    it('should return -3 when type is SUM, a = -1.5 and b = -2.5', () => {
      expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when type is SUBTRACT, a = 1.4 and b = 2.6', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.6)).to.equal(-2);
    });

    it('should return -1 when type is SUBTRACT, a = 1.5 and b = 2.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
    });

    it('should return -2 when type is SUBTRACT, a = 1.8 and b = 4.3', () => {
      expect(calculateNumber('SUBTRACT', 1.8, 4.3)).to.equal(-2);
    });

    it('should return 0 when type is SUBTRACT, a = -0.4 and b = 0.4', () => {
      const result = calculateNumber('SUBTRACT', -0.4, 0.4);
      expect(Object.is(result, 0) || Object.is(result, -0)).to.be.true;
    });

    it('should return 1 when type is SUBTRACT, a = -1.5 and b = -2.5', () => {
      expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equal(1);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
