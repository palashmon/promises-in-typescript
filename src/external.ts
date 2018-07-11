/**
 * Return a Promise of number which is resolved asynchronously.
 */
export function external(num: number) {
  return new Promise<number>(res => {
    setTimeout(() => res(num + 1), 800);
  });
}
