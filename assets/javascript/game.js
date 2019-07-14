let letters = ["m", "u", "e", "y"];

let guessedLetters = [];

let letterToGuess = null;

let guessesLeft = 9;

let wins = 0;

let losses =0;


const updatedGuessLeft = () => {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

const updatedLeterToGuest = () => {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

const updatedGuessesSoFar = () => {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
}
    
const reset = () => {
    guessesLeft = 9;
    guessedLetters = [];
    updatedLeterToGuest (); 
    updatedGuessLeft(); 
    updatedGuessesSoFar();
   if(losses == 5){
       losses=0;
   }
   if(wins == 3){
       wins=0;
   }
}

updatedLeterToGuest();
updatedGuessLeft();

document.onkeydown = () => {
    guessesLeft--;
    let letter = event.key.toLowerCase();
    //Then its going to add the guess into the array
    guessedLetters.push(letter);

    updatedGuessLeft();
    updatedGuessesSoFar();

    if(letter === letterToGuess){
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    if(guessesLeft ===0){
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    } 
}