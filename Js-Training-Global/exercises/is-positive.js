'use strict'

/*
 * Create a `isPositive` function that takes a number as
 * parameter and return true if the given number is
 * stricly positive, or false otherwise
 *
 */

// Your code:

function isPositive(number){
    if(Math.sign(number) === 1){
      return true;
    }
    else {
      return false;
    }
  }
  

//* Begin of tests
const assert = require('assert')
console.log('Starting test ...')
assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)
console.log('Well done !!')
// End of tests */
