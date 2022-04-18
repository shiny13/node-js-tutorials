const chalk = require('chalk');
const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

const error = chalk.inverse.bold.red;
const success = chalk.bold.green;

// Check valid email
console.log(error(validator.isEmail('shahnawaz'))) // false
console.log(success(validator.isEmail('shahnawaz@email.com'))) // true
// Check valid URL
console.log(error(validator.isURL('./mead.io'))) // false
console.log(success(validator.isURL('https://mead.io'))) // true
console.log(success('Success!'))