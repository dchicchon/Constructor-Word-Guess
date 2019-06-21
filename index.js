// var inquirer = require("inquirer"); 
// var Word = require('./Word')

// // Have the user input a letter

// // var hello = "Hello";


// inquirer.prompt([
//     {
//        name: 'value',
//        message: 'Guess a letter.' 
//     }
// ]).then(function(response) {
//     console.log(response.value)
//     character = new Letter(response.letter)
//     console.log(character)
// })


// function makeWord(word) {
//     var wordList = []
//     for (var i =0; i< word.length; i++) {
//         wordList.push('_ ')
//     }
//     console.log(wordList) // List of underscores equating the length of the word
//     console.log(wordList.length) // Length of the list

//     var wordString; // New variable that will be assigned to print out the items in wordList
//     for (var j = 0; j < wordList.length; j++) { // Iterates through the wordList 
//         wordString += wordList[j]
//     }
//     console.log(wordString)
// };

// makeWord(hello)

// var character ;
// console.log(character)


// function inputLetter() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name : "letter",
//             message : "Please select a letter."
//         }
//     ]).then(function(response) {
//         // send the letter to the word to check if the letter matches with that word.
//         console.log(response.letter)
        
//     })
// }

// inputLetter()