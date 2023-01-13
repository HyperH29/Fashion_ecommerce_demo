// Welcome
// Walk me through how i would make a hangman game in typescript

let word = "hangman";
let wordArray = word.split("");
let wordLength = wordArray.length;
let guessArray = [];
let guess = "";
let guessCount = 0;
let guessLimit = 6;
let outOfGuesses = false;

for (let i = 0; i < wordLength; i++) {
  guessArray.push("_");
}

while (guess !== word && !outOfGuesses) {
  if (guessCount < guessLimit) {
    guess = prompt("Guess a letter");
    guessCount++;
  } else {
    outOfGuesses = true;
  }
}

if (outOfGuesses) {
    console.log("You Lose");
} else {
    console.log("You Win");

}
// play when button pressed
let button = document.createElement("button");
let body = document.getElementsByTagName("body")
//
function play() {
  switch (guess) {
    case "h":
        guessArray[0] = "h";
        break;
    case "a":
        guessArray[1] = "a";
        break;
    case "n":
        guessArray[2] = "n";
        break;
    case "g":
        guessArray[3] = "g";
        break;
    case "m":
        guessArray[4] = "m";
        break;
    case "n":
        guessArray[5] = "n";
        break;
    default:
        console.log("Not a letter");
        break;

  }
}