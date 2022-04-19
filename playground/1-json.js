const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)
// const data = JSON.parse(dataJSON)
// console.log(data.title);
// console.log(data.author);

// Load the data from file
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString()

// Change the data
const data = JSON.parse(dataJSON)
data.name = "Shahnawaz Alam"
data.age = 31

// Save to file as a json string
const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)

// Load and view the data in the file
const buffer = fs.readFileSync('1-json.json');
console.log(buffer.toString())