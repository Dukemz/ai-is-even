/*
  yeah
*/

"use strict";

const isOdd = require('is-odd-ai');

module.exports = async function isEvenAI(i) {
  const result = await isOdd(i);
  return !result;
}
