const fs = require('fs')
const chalk = require('chalk');
const { clear } = require('console');

const red = chalk.inverse.red;
const blue = chalk.bold.blue;
const green = chalk.inverse.green;
const yellow = chalk.bold.yellow;
const magentaTitle = chalk.inverse.magenta;
const magentaText = chalk.bold.magenta;

const addNote = (title, body) => {
    const notes = loadNotes()

    // an array filter that will search the whole for a match
    // const duplicateNotes = notes.filter((note) => note.title == title)
    
    // Better than filter, it stops on the 1st instance of a match
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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
        console.log(yellow(`Note with title: ${title} does not exist.`))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(magentaTitle('Your Notes'))
    notes.forEach((note) => console.log(magentaText(`| ${note.title}: ${note.body} |`)))
}

const readNote = (title) => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(red('The json file is empty'))
        return
    }

    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(`${magentaTitle(note.title)} ${note.body}`)
    } else {
        console.log(red('No note found!'))
    }
}

module.exports = { 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}