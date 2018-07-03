'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Merci StackOverflow

//* Begin of tests
const assert = require('assert')
console.log('Starting test ...')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('Hello wolrd'), 'Hello Wolrd')
assert.strictEqual(jadenCase('hEllo wOlrd'), 'Hello Wolrd')
console.log('Well done !!')
// End of tests */