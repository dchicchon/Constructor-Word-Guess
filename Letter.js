// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// _ _ _ _   _ _ _ _ _

var Letter = function(underlyingLetter) {
    this.letter = underlyingLetter // The underlying letter
    this.guessed = false // If the letter has been guessed e.g. True if it was guessed, False if not
    this.letterGuessed = function() { // returns the underlying character if it was guessed, returns the placeholder if not
        if (this.guessed) { // If we are checking a parameter to see its boolean value, we can just check the value itself and itll return true or false
            return this.letter
        } 
    }
    this.checkLetter = function(character) { // takes in character and checks it against the underlying character. If it matches, it updates this.guess to true.
        if (character === this.letter) {
            this.guessed = true 
        }
    }

}



// If I have module.exports equals something directly, it is only that one item
// If I have module.exports equals multiple items like item:item or Letter:Letter, it is more than one item
module.exports = Letter