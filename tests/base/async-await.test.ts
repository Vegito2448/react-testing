import { getImage } from '../../src/base';

describe('Testing async await', () => {
  test('should return a url', async () => {
    const url = await getImage();

    expect(typeof url).toBe('string');
    expect(url.includes('http')).toBe(true);
  });
});
