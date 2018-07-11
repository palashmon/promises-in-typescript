import { getHero } from './hero';

/**
 * This function will have an array named handles containing the name of a couple of heroes
 */
async function getHeroes() {
  const heroes = ['superman', 'batman', 'flash'];

  for (const handle of heroes) {
    const hero = await getHero(handle);
    console.log(`
  Name: ${hero.name}
  Alias: ${hero.alias}
    `);
  }
}
getHeroes();
