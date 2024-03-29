import {
  getRandomNumber,
  getRandomString,
  getRandomStringWithLengthInRange,
} from '../../cypress/utils/random.ts';

describe('test/utils/random', () => {
  const EMPTY_STRING = '';

  describe('getRandomNumber', () => {
    it('shall return a number with min and max arguments', () =>
      expect(typeof getRandomNumber(0, 10)).toBe('number'));

    it('shall NOT return a NaN with min and max arguments', () =>
      expect(Number.isNaN(getRandomNumber(0, 10))).toBeFalsy());

    it('shall NOT return a NaN without min and max arguments', () => {
      const result = getRandomNumber();
      expect(typeof result).toBe('number');
      expect(Number.isNaN(result)).toBeFalsy();
    });

    it('shall return min if min and max arguments are equals', () => {
      const expectedNumber = 10;
      const result = getRandomNumber(expectedNumber, expectedNumber);
      expect(result).toBe(expectedNumber);
    });

    it('shall return min if min is greater than max argument', () => {
      const expectedNumber = 100;
      const result = getRandomNumber(expectedNumber, 90);
      expect(result).toBe(expectedNumber);
    });

    it('shall return number with requested n digits in min and max arguments', () =>
      expect(getRandomNumber(30, 40).toString().length).toBe(2));
  });

  describe('getRandomString', () => {
    it('shall return a string with length argument', () =>
      expect(typeof getRandomString(10)).toBe('string'));

    it('shall NOT return an empty string with length argument', () => {
      const result = getRandomString(10);

      expect(result).not.toBe(EMPTY_STRING);
      expect(result).not.toBeNull();
    });

    it('shall NOT return an empty string without length argument', () => {
      const result = getRandomString();
      expect(result).not.toBe(EMPTY_STRING);
      expect(result).not.toBeNull();
    });

    it('shall return a string with exact length as requested', () => {
      const requestedLength = 5;
      const result = getRandomString(requestedLength);
      expect(result.length).toBe(requestedLength);
    });

    it('shall return an empty string if requested length is negative', () =>
      expect(getRandomString(-6)).toBe(EMPTY_STRING));
  });

  describe('getRandomStringWithLengthInRange', () => {
    it('shall return a string with min and max arguments', () =>
      expect(typeof getRandomStringWithLengthInRange(0, 10)).toBe('string'));

    it('shall return a string without min and max arguments', () =>
      expect(typeof getRandomStringWithLengthInRange()).toBe('string'));
  });
});
