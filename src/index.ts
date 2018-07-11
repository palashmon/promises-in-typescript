/**
 * Here we use the await to pause the execution of the code
 * until the Promise is resolved and call the callback passing in the time.
 * @param callback
 */
const startAsync = async callback => {
  await sleep(1000);
  callback('Hello');
  await sleep(1000);
  callback('And Welcome');
  await sleep(1000);
  callback('To Async Await Using TypeScript');
};

/**
 * This function takes a number of milliseconds and returns a Promise that gets resolved
 * using setTimeout after the given number of milliseconds.
 * @param ms number of milliseconds
 */
const sleep = ms => new Promise(res => setTimeout(res, ms));

/**
 * Log the function result here
 */
startAsync(text => console.log(text));
