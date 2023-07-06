// Generate a random number between 0 and 5 (inclusive)
var randomNumber = Math.floor(Math.random() * 6);

// Add 1 to the random number to get a dice number between 1 and 6
var diceNumber;

if (randomNumber === 0) {
  diceNumber = 1;
} else if (randomNumber === 1) {
  diceNumber = 2;
} else if (randomNumber === 2) {
  diceNumber = 3;
} else if (randomNumber === 3) {
  diceNumber = 4;
} else if (randomNumber === 4) {
  diceNumber = 5;
} else {
  diceNumber = 6;
}

// Print the dice number
console.log("Dice number: " + diceNumber);
