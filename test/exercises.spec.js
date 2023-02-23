const { isArray } = require('../src/index');

describe('Arrays', () => {
  describe('is array', () => {
    const array = [];
    const string_ = '';
    const numbers = 11;
    const objectss = {};

    test('string is array', () => {
      const result = isArray(string_);
      expect(result).toBe(false);
    });

    test('number is array', () => {
      const result = isArray(numbers);
      expect(result).toBe(false);
    });

    test('objectss is array', () => {
      const result = isArray(objectss);
      expect(result).toBe(false);
    });

    test('array is array', () => {
      const result = isArray(array);
      expect(result).toBe(true);
    });
  });
});
