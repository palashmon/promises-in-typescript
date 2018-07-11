/**
 * A simple hero nested object
 */
const hero = {
  superman: {
    name: 'Superman',
    alias: 'Clark Kent'
  },
  batman: {
    name: 'Batman',
    alias: 'Bruce Wayne'
  },
  flash: {
    name: 'The Flash',
    alias: 'Barry Allen'
  }
};

/**
 * The getHero function simply takes the hero and
 * returns a Promise to the details which are resolved asynchronously.
 *
 * @export the getHero function
 * @param {string} handle name of the hero
 * @returns a Promise to the details which are resolved asynchronously
 */
export async function getHero(handle: string) {
  return new Promise<{ name: string; alias: string }>(res => {
    setTimeout(() => {
      res(hero[handle]);
    }, 1200);
  });
}
