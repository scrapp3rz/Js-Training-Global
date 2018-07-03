'use strict'

/*
 * Create a `sub` function that takes 2 numbers as arguments and substract them
 *
 * @notions Primitive and Operators, Functions
 */

// Your code :
function sub(first,second){
  return first-second
}
//* Begin of tests
const assert = require('assert')
const rand = Math.random()
console.log('Starting test ...')
assert.strictEqual(typeof sub, 'function')
assert.strictEqual(sub.length, 2)
assert.strictEqual(sub(2, 2), 0)
assert.strictEqual(sub(-2, 2), -4)
assert.strictEqual(sub(rand, rand), rand - rand)
console.log('Well done !!')
// End of tests */