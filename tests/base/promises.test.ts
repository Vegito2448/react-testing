import { getHeroByIdAsync } from '../../src/base';
import { heroes } from '../../src/data';

describe('promises', () => {
  test('should return a hero', () => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
    });
  });

  test('should return "Could not find the hero" if hero does not exist', () => {
    const id = 10;
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe('Could not find the hero');
    });
  });
});
