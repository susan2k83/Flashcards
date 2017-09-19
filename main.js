
var inquirer = require('inquirer');
// inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
//     // Use user feedback for... whatever!!
// });

// to access  questions.json
var fs = require("fs");

var questions;

fs.readFile("questions.json", "utf8", function(error, data) {
    if(error) {
        return console.log("error");

    }
    questions = data;
});

inquirer.prompt([
    /* Pass your questions in here */
]).then(function (answers) {
    // Use user feedback for... whatever!!
});
