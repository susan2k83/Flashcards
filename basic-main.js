// Code does not work, and I know it's not complete...

var inquirer = require('inquirer');
var cards = require("./questions-basic.json");
var BasicCard = require("./BasicCard.js");

// function for starting the questions and keeping score 

function initGame(){
    var cardArray = [];
    var initialScore = 0;
    var initialIndex = 0;
    
    for(var i = 0; i < cards.length; i++){
       var currentCard = new BasicCard(cards[i].front, cards[i].back);
       cardArray.push(currentCard);
    }
}
var fs = require("fs");

var questions;

fs.readFile("questions.json", "utf8", function(error, data) {
    if(error) {
        return console.log("error");

    }
    questions = data;
});

// Below, I  am trying to run the questins from the cards variable, which 
// has been referenced  from - questions-basic.json

inquirer.prompt([cards
    /* Pass your questions in here */
]).then(function (answers) {
    // Use user feedback for... whatever!!
});
// the user answers then need to be compared to the correct answers
