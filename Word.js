var Letter = require("./Letter")

console.log(Letter)

var something = new Letter('a')
console.log(something)


something.letterGuessed()

something.checkLetter('a')
something.letterGuessed()

// something.letterGuessed()


// // Create an object representing the current word the user is attempting to guess. 
// var Word = function() {
//     this.letterObjs = []; // represents the letters of the underlying word. Like "hello" in this array would look like ['h','e','l','l','o']
//     this.word = function() {
//     }
    
// }

// module.exports = Word
