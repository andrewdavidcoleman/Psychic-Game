


// global variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

var wins = 0;
var losses = 0;
var guessesLeft = 12;
var previousGuesses = []


 // When the user presses a key, it will run the following function...

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomLetter){
        wins++;
        guessesLeft = 12;
        previousGuesses = [];
        alert("You Win!")
    } else {
        guessesLeft--;
        previousGuesses.push(' ' + userGuess);

    }

    if(guessesLeft === 0){
        losses++;
        guessesLeft = 12;
        previousGuesses = [];
        alert("You lose:(")
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('guessed').innerHTML = previousGuesses;
}

