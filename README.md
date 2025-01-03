This repository contains all the necessary code and descriptions about Node.js, ranging from basic to advanced concepts.

Step 1: Initialize the Node.js Module

Run the following command to initialize the Node.js module:

npm init 

Step 2: Fill in Required Information

Provide the necessary details such as the package name, author, version, and description in the package.json file.

Note:

Ensure not to delete the node_modules folder. If it gets deleted, you can reinstall it by running:

npm install

Understanding Node.js Modules

In Node.js, everything is built as a module, which is a reusable block of code. Modules allow functionalities to be exported and imported into other files or programs. They form the building blocks of an application, enabling better organization and manageability.


**File based import export** 

Step 1: Exporting a Module

To export a module, create a file named anyname.js (e.g., app.js). In this file, write the following code to export a variable:

const a = 400;

module.exports = a; // Exporting the variable

Step 2: Importing a Module

To import the exported module from another file, use the following code:

const a = require("./anyname");

console.log(a); // Output: 400

Exporting and Importing Functions

To export functions, you can define and export them as part of an object. For example:

// anyname.js
const average = (x, y) => (x + y) / 2;
const percent = (x, y) => (x / y) * 100;

module.exports = { average, percent }; // Exporting functions

To import and use these functions in another file:

const { average, percent } = require("./anyname");

console.log(average(10, 20)); // Output: 15
console.log(percent(20, 100)); // Output: 20






**Importing Built-in Modules**

Node.js provides several built-in modules for common tasks. To use a built-in module, you need to import it using require(). For example:

File System Module (fs)

The fs module provides functionalities to work with the file system. Below is an example of reading a file using the fs module:

Import the fs module:

const fs = require("fs");

Read a file named sample.txt in UTF-8 encoding:

fs.readFile("./sample.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

Explanation:

fs.readFile() is an asynchronous function that reads the contents of the specified file.

The callback function has two parameters: err (error object) and data (file content).

If an error occurs, it is handled in the if (err) block; otherwise, the file's content is logged to the console.



**Converting Asynchronous Functions to Synchronous**

In some cases, you may want to convert an asynchronous function to a synchronous one. For example, reading a file synchronously can be achieved using fs.readFileSync. Here’s how:

Import the fs module:

const fs = require("fs");

Use fs.readFileSync to read a file synchronously:

const data = fs.readFileSync("./sample.txt", "utf-8");
console.log(data);

Explanation:

fs.readFileSync() reads the file content synchronously, meaning the program waits for the file to be read before continuing execution.

This approach is straightforward but should be used cautiously, as synchronous operations can block the event loop and affect application performance, especially in large-scale applications.

Notes

Always ensure proper naming conventions and organization of your modules for better readability and maintainability.

Utilize module.exports and require() effectively to modularize and reuse code across your Node.js application.


//Third Party 

nodemon is the package which helps not to repeat any command continuously 
installed by using command
npm i nodemon -g  for complete projects


any third party module can be installed and used as same as fs
