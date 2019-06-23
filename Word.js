var Letter = require("./Letter")

var something = new Letter('a')

// console.log(something)

something.checkLetter('b') // This will check the string 'b' against something.letter which is 'a'. something.guessed will stay false
something.letterGuessed() // should only return an underscore while something.guessed is false

something.checkLetter('a') // if the user input the letter 'a' for instance, this function will check that letter and see if it matches the letter at that point. If so, it changes that letter objects property 'guessed' to true.
something.letterGuessed() // Now that letter .guessed is equal to true because of checkLetter, using the function LetterGuessed will now return the underlying character rather than an underscore. While .guessed is not true, it will only return an underscore.



// // Create an object representing the current word the user is attempting to guess.

// use .split to separate a word into characters in a list for this.letterObjs

var Word = function() {
    this.letterObjs = ['h','e','l','l','o']; // represents the letters of the underlying word. Like "hello" in this array would look like ['h','e','l','l','o']
    this.word = function(word) {
        for (var i = 0; i < word.length; i++) {
             = new Letter (word[i])
        }
    }
    
}

module.exports = Word
