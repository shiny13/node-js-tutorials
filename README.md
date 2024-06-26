# Node.js Tutorials
This project contains exercises from Andrew Mead's Node.js tutorial:  
[The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

### Lesson 1 - Hello World
This lesson prints a console message to the terminal. The user must use the following command to print the message to the terminal:  
`node hello.js`

### Lesson 2 - Notes app
This lesson teaches you to make a console application with Node.js.  
Here you can follow the code and learn how to use the library `yargs` to accept command like arguments while running the node.js application  

Run the app by the following command:  
`node app.js`  
Followed by one of these parameters:
- `add`
- `remove`
- `list`
- `read`  

Each command may have their own option parameters as described below.

#### Add command usage  
The add command can be invoked with two mandatory string option parameters: title and body, where it will add a json array to the file: `notes.json`.  
Example: `node app.js add --title="List" --body="Sweater, Pants"`  
Here the app is run with the add command and two options:  
Title: "List"  
Body: "Sweater, Pants"

#### Remove command usage  
The remove command can be invoked with one mandatory string option parameters: title where it will locate that title and remove it from the json file: `notes.json`.  
Example: `node app.js remove --title="List"`  
Here the app is run with the remove command and one options:  
Title: "List"  

#### List command usage  
The list command reads the contents from json file: `notes.json` and parses them to a list of objects containing the `title` and `body` properties.  
Example: `node app.js list`  

#### Read command usage  
The read command can be invoked with one mandatory string option parameters: title where it will print the title and body by reading it from the json file: `notes.json`.  
Example: `node app.js read --title="List"`  
Here the app is run with the remove command and one options:  
Title: "List"  

### New Lesson 2 - Notes app
This lesson teaches you to make a console application with Node.js. 
Here we will use a built in node.js library called `fs` to manipulate files. 

To import a library the `require()` is used with the library name as parameter as follows:
`const fs = require('fs')` 

Then the variable `fs` can be used within the file to invoke methods in the library.
`fs.writeFileSync('notes.txt', 'My name is Shahnawaz.')`
NB: The following website has information on npm libraries: `https://www.npmjs.com/` 

To import a file in the current file, the `require()` can be used as follows:
`const utils = require('./utils.js')`
NB: the `utils.js` must export the methods and variables to be used in the new file as follows:
`module.exports = { name, add, multiply }`
Here `name` is a variable and `add` and `multiply` are javascript functions.
