/*!
 * is-even-ai <https://github.com/Dukemz/is-even-ai>
 *
 * Released under the Apache 2.0 License.
 */

"use strict";

const isOdd = require('is-odd-ai');

/**
 * Determines if a number is even using AI insights from the `is-odd-ai` package.
 *
 * This function requires the user to have the `is-odd-ai` package installed and an OpenAI API key set in a `.env` file.
 *
 * @param {number} i - The number to check for evenness.
 * @returns {Promise<boolean>} - A Promise that resolves to `true` if the number is even, or `false` if the number is odd.
 *
 * @example
 * const isEven = require('is-even-ai');
 *
 * async function checkNumber() {
 *   const number = 4;
 *   const result = await isEven(number);
 *   
 *   if (result) {
 *     console.log(`${number} is even!`);
 *   } else {
 *     console.log(`${number} is odd!`);
 *   }
 * }
 *
 * checkNumber();
 */
module.exports = async function isEvenAI(i) {
  const result = await isOdd(i);
  return !result;
}
