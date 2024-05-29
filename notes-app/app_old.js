const fs = require('fs')

// Makes a fresh entry and replaces the whole file with the string.
//fs.writeFileSync('notes.txt', 'My name is Shahnawaz.')

fs.appendFileSync('notes.txt', 'I live in Australia and I am in my mid 30s.')
