const fs = require('fs')
const chalk = require('chalk');

const red = chalk.inverse.red;
const blue = chalk.bold.blue;
const green = chalk.inverse.green;
const yellow = chalk.bold.yellow;

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // implementing an array filter
    const duplicateNotes = notes.filter((note) => note.title == title)

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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    console.log(blue('saving to notes.json'))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(yellow('The json file is empty'))
        return
    }

    const newNotes = notes.filter((e) => e.title !== title)
    if (notes.length > newNotes.length) {
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
