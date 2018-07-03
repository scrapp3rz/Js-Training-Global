'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

function capitalize(a){
    var capitale = a.substring(0,1).toUpperCase();
    var lower = a.substring(1, a.strength).toLowerCase();
    return capitale+lower
}

//* Begin of tests
const assert = require('assert');
console.log('Starting test...');
assert.strictEqual(typeof capitalize, "function");
assert.strictEqual(capitalize('str'), 'Str');
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd');
assert.strictEqual(capitalize('STR'), 'Str');
assert.strictEqual(capitalize('zapZAP'), 'Zapzap');
console.log('Well done !!');
// End of tests */
