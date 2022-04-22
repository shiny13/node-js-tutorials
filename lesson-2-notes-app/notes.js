const fs = require('fs')
const chalk = require('chalk');

const red = chalk.bold.red;
const blue = chalk.bold.blue;
const green = chalk.bold.green;
const yellow = chalk.bold.yellow;

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    // implementing an array filter
    const duplicateNotes = notes.filter(function (note) {
        return note.title == title
    })

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(green('New note added!'))
    } else {
        console.log(red('Note title taken!'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log(blue('saving to notes.json'))
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function(title) {
    const notes = loadNotes()

    if (notes.length == 0) {
        console.log(yellow('The json file is empty'))
    }

    const note = notes.filter(function (e) {
        return e.title === title
    })

    if (note.length !== 0) {
        const newNotes = notes.filter(function (e) {
            return e.title !== title
        })
        saveNotes(newNotes)
        console.log(green(`Removed note with title: ${title}`))
    } else {
        console.log(red(`Note with title: ${title} does not exist.`))
    }
}

module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
