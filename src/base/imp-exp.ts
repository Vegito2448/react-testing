import { heroes } from '../data/heroes';

const getHeroById = (id: number) => heroes.find((hero) => hero.id === id);
const getHeroesByOwner = (owner: string) =>
  heroes.filter((hero) => hero.owner === owner);
export { getHeroById, getHeroesByOwner };
