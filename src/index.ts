/**
 * Take a callback and call it using the setTimeout function
 * @param callback
 */
const start = callback => {
  setTimeout(() => {
    callback('Hello');
    setTimeout(() => {
      callback('And Welcome');
      setTimeout(() => {
        callback('To Async Await Using TypeScript');
      }, 1000);
    }, 1000);
  }, 1000);
};

/**
 * Log the function result here
 */
start(text => console.log(text));
