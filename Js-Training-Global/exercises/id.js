'use strict'

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :

function id(arg){
    return arg
}

//* Begin of tests
const assert = require('assert')
console.log('Starting test ...')
assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
console.log('Well done !!')
// End of tests */
