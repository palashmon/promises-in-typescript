import { external } from './external';

/**
 * A simple generator function
 * This will return numbers one by one till 10
 */
async function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    index = await external(index);
    if (index > 10) {
      break;
    }
  }
}

/**
 * This function used to log the numbers
 */
async function getNumbers() {
  for await (const num of numbers()) {
    console.log(num);
  }
}
getNumbers();
