import { describe } from 'vitest';
import { getArray } from '../../src/base';
describe('testing Array destructuring', () => {
  test('should return an array with the first value as the string "ABC123" and the second value as the string "Vegito2448"', () => {
    const [uid, username] = ['ABC123', 'Vegito2448'];

    expect(uid).toBe('ABC123');
    expect(username).toBe('Vegito2448');
  });

  test('getArray should return and array with length 2', () => {
    const [a, b] = getArray();

    expect(a).toBe('ABC');
    expect(b).toBe(123);
  });
});
