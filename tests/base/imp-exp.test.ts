import { getHeroById, getHeroesByOwner } from '../../src/base';
import { heroes } from '../../src/data';

describe('imp-test tests heroes', () => {
  test('should return a hero by id', () => {
    const id = 1;
    const hero = getHeroById(id);
    const expected = heroes[0];

    expect(hero).toEqual(expected);
  });

  test('should return undefined if hero does not exist', () => {
    const id = 10;
    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
  });

  test('should return a hero array with owner DC', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC).toEqual([heroes[0], heroes[2], heroes[3]]);
  });

  test('should return a hero array with owner Marvel', () => {
    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    expect(heroesMarvel).toEqual([heroes[1], heroes[4]]);
    expect(heroesMarvel).toHaveLength(2);
  });
});
