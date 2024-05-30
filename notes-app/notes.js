const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('New note saved!'))
    } else {
        console.log(chalk.red.inverse.bold('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse.bold('No note found!'))
    } else {
        console.log(chalk.green.inverse.bold('Note removed!'))
    }

    saveNotes(notesToKeep)
    console.log(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.red.inverse.bold('No notes found'))
        return
    }

    console.log(chalk.blue.inverse.bold('Your notes'))
    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const searchedNote = notes.find((note) => note.title === title)

    if (searchedNote) {    
        console.log(chalk.blue.inverse.bold('Title: ' + searchedNote.title))
        console.log('Body: ' + searchedNote.body)
    } else {
        console.log(chalk.red.inverse.bold('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
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

module.exports = { 
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
