'use strict'

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :

var str = "1337";
var num = 42;
var bool = false;
var undef = undefined;

//* Begin of tests
const assert = require('assert')
console.log('Starting test ...')
assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, '1337')

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 42)

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, false)

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)
console.log('Well done !!')
// End of tests */