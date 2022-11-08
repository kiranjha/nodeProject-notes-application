const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) { //if(duplicateNote === undefined)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    //console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title) //if not match return true
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green(`YOUR NOTES - `))
    notes.forEach((notes) => console.log(notes.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    //console.log(chalk.green(`YOUR NOTES - `))
    const found = notes.find((note) => note.title === title)
    if(found){
        console.log(chalk.green(found.title)," : ",chalk.green(found.body))
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}