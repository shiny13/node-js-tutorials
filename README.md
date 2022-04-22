# node-js-tutorials
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
The add command can be invoked with two mandatory string option parameters: title and body  
Example: `node app.js add --title="List" --body="Sweater, Pants"`  
Here the app is run with the add command and two options:  
Title: "List"  
Body: "Sweater, Pants"


