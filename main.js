// main.js will not be used to run the program

var inquirer = require('inquirer');

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
