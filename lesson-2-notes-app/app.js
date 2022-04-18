const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

// Check valid email
console.log(validator.isEmail('shahnawaz')) // false
console.log(validator.isEmail('shahnawaz@email.com')) // true
// Check valid URL
console.log(validator.isURL('./mead.io')) // false
console.log(validator.isURL('https://mead.io')) // true