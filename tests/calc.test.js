const {
  one,
  two,
  three,
  oneHundred,
  ninetyNineThousandNineHundredAndNinetyNine,
  plus,
  minus,
  divide,
  multiply
} = require('../utils/calc');

describe('plus function', () => {
  test('should return a whole number', () => {
    expect(two(plus(three()))).toBe(5);
    expect(ninetyNineThousandNineHundredAndNinetyNine(plus(three()))).toBe(100002);
    expect(one(plus(one(plus(one(plus(one()))))))).toBe(4)
  });
});

describe('minus function', () => {
  test('should return a whole number', () => {
    expect(two(minus(three()))).toBe(1);
    expect(ninetyNineThousandNineHundredAndNinetyNine(minus(three()))).toBe(-99996);
    expect(one(minus(one(minus(one(minus(one()))))))).toBe(-2)
  });
});

describe('multiply function', () => {
  test('should return a whole number', () => {
    expect(two(multiply(three()))).toBe(6);
    expect(ninetyNineThousandNineHundredAndNinetyNine(multiply(three()))).toBe(299997);
    expect(one(multiply(one(multiply(one(multiply(one()))))))).toBe(1)
  });
});

describe('divide function', () => {
  test('should return a whole number', () => {
    expect(two(divide(three()))).toBe(1.5);
    expect(ninetyNineThousandNineHundredAndNinetyNine(divide(three()))).toBe(0);
    expect(one(divide(one(divide(one(divide(one()))))))).toBe(1)
  });
  test('should return maximum 4 decimal places', () => {
    expect(three(divide(two()))).toBe(0.6667);
    expect(three(divide(oneHundred()))).toBe(33.3333);
  });
});