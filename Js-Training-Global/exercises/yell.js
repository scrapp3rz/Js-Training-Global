'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(arg){
    return arg.toUpperCase();
}
//* Begin of tests
const assert = require('assert')
console.log('Starting test ...')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("salut"), "SALUT")
console.log('Well done !!')
// End of tests */