const yargs = require('yargs');
const chalk = require('chalk');
// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// const error = chalk.inverse.bold.red;
// const success = chalk.bold.green;
const greenArgs = chalk.bold.green;
const yellowArgs = chalk.bold.yellow;

// Check valid email
// console.log(error(validator.isEmail('shahnawaz'))) // false
// console.log(success(validator.isEmail('shahnawaz@email.com'))) // true
// // Check valid URL
// console.log(error(validator.isURL('./mead.io'))) // false
// console.log(success(validator.isURL('https://mead.io'))) // true
// console.log(success('Success!'))

// // Manually access args
// let arg = process.argv[2]
// if (arg && arg !== '') {
//     console.log('Argument input: ' + consoleArgs(arg))
// }

// compare process.argv and yargs
// console.log(process.argv)
// console.log(yargs.argv)

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(yellowArgs('Title: ') + greenArgs(argv.title))
        console.log(yellowArgs('Body: ') + greenArgs(argv.body))
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Reading the note!')
    }
})

console.log(yargs.argv)