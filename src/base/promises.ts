import { getHeroById } from './imp-exp';

const getHeroByIdAsync = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('Could not find the hero');
      }
    }, 2000);
  });
};

export { getHeroByIdAsync };
