const notes = require('./notes')
const utils = require('./utils')
const chalk = require('chalk')
const validator = require('validator')

console.log(utils.name)

const sum = utils.add(4, -2)
console.log(sum)

const product = utils.add(5, 3)
console.log(product)

const msg = notes.getNotes()
console.log(msg)

// validate emails
const email1 = 'shah@example.com'
console.log('Valid email ' + email1 + ' : ' + validator.isEmail(email1))
const email2 = 'shah@example'
console.log('Valid email ' + email2 + ' : ' + validator.isEmail(email2))

// validate URLs
const url1 = 'https://mead.io'
console.log('Valid url ' + url1 + ' : ' + validator.isURL(url1))
const url2 = 'https/mead.io'
console.log('Valid url ' + url2 + ' : ' + validator.isURL(url2))

console.log(chalk.green.inverse.bold('Success!'))
console.log(chalk.red.bold('Failure!'))
