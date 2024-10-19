/*
  disclaimer: I didn't test this at all
  unsurprisingly this was taken from https://github.com/rhettlunn/is-odd-ai/blob/main/test/isOddTest.js
  if this fails don't say I didn't warn you
*/

const assert = require('assert');
const isEven = require('../index');

describe('isEven function', () => {
  it('should return true for even numbers', async () => {
    const result = await isEven(6);
    assert.strictEqual(result, true);
  });

  it('should return false for odd numbers', async () => {
    const result = await isEven(7);
    assert.strictEqual(result, false);
  });

  it('should handle zero correctly', async () => {
    const result = await isEven(0);
    assert.strictEqual(result, true);
  });

  it('should handle negative even numbers correctly', async () => {
    const result = await isEven(-2);
    assert.strictEqual(result, true);
  });

  it('should handle negative odd numbers correctly', async () => {
    const result = await isEven(-9);
    assert.strictEqual(result, false);
  });

  it('should throw an error for non-numeric input', async () => {
    try {
      await isEven('abc');
      // If isEven does not throw an error for non-numeric input, fail the test
      assert.fail('Expected error to be thrown');
    } catch(error) {
      assert.strictEqual(error instanceof Error, true);
    }
  });
});