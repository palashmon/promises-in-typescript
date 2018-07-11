import { getHero } from './hero';

/**
 * This function will have an array named handles containing the name of a couple of heroes
 */
async function getHeroes() {
  const heroes = ['superman', 'batman', 'flash'];

  // Run more than one operations at a time, and wait for them all to resolve
  const all = heroes.map(getHero);
  const combine = Promise.all(all);
  const details = await combine;
  for (const hero of details) {
    console.log(`
Name: ${hero.name}
Alias: ${hero.alias}
  `);
  }
}
getHeroes();
