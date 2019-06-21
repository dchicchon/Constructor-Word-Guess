var inquirer = require("inquirer"); 
var Word = require('./Word')

// Have the user input a letter
function inputLetter() {

    inquirer.prompt([
        {
            name = "letter",
            message = "Please select a letter."
        }
    ]).then(response => {
        // send the letter to the word to check if the letter matches with that word.
        console.log(response.letter)
    })
}

inputLetter()