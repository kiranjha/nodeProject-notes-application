// const fs = require(`fs`);

// fs.writeFileSync(`notes.txt`,`My name is Kiran Jha.`);
// fs.appendFileSync('notes.txt',' I am from Delhi');

// const add = require('./utils.js');
// const sum = add(4,5);
// console.log(sum);

//Challenge: Define and use a function in a new file
//1. Create a new file called notes.js
//2. Create getNotes function that returns "your notes..."
//3. EXport getNotes function
//4. From app.js load in and call the function printing message to console
// const validator = require('validator');
// const { default: isEmail } = require('validator/lib/isemail.js');
// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);

// //console.log(validator.isEmail('kiranexample.com'));
// console.log(validator.isURL('https://mead.io'))
// const msg = getNotes();
// console.log(msg);


// const greenMsg = chalk.bold.green('Success !')
// console.log(greenMsg);
// console.log(chalk.blue.inverse.bold('SUCCESS!'))
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

// //Challenge: Use the chalk library in your project
// //1. Install version 2.4.1 of chalk
// //2. Load chalk into app.js
// //3. Use it to print the stirng "Success" to the console in green
// //4. Test your work
// //Bonus: Use docs to mess around with other styles. Make text bold and inversed.

// //Process GLOBAL Variable
// //argv stands for argument vector
// console.log(process.argv[2])

//const command = process.argv[2]
// console.log(process.argv[2])
// if(command === 'add'){
//     console.log('ADDING NOTE')
// } else if(command === 'remove'){
//     console.log('REMOVING NOTE')
// }
//console.log(process.argv)


//Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work


// Challenge: Setup remove command option and function
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removable log the title of the note to be removed 
// 5. Test your work using: node app.js remove --title="some title"

//
//Challenge: Write up removable
// 
// 1. Load existing note
// 2. Use array filter method to remove the matching note (if any)
// 3. save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

//
// Goal: Refactor all functions
//
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work

//
//Goal: Write up list command
//
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work

//
//Goal: Write up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands


//CUSTOMIZE yargs version
yargs.version('1.1.0')

//CREATE add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'          //for example- buy
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'          //for example- These are what I need to buy 
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        // console.log('TITLE :- ',argv.title)
        // console.log('BODY :- ',argv.body)
    }
})

//CREATE remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        // console.log('REMOVING OUR NOTE')
    }
})

//CREATE list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

//CREATE read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//add, remove, read, list

//CHALLENGE: Add to new command
//1. Setup command to support "List" command (print placeholder message for now)
//2. Setup command to support "read" command (print placeholder message for now)
//3. Test your work by running both commands and ensure correct output

yargs.parse()
//console.log(yargs.argv)
