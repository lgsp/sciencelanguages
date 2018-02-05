document.write("<h1>Welcome to the Hang Man Game!</h1>");
alert("Welcome to the Hang Man Game!");
alert("You have to find the word behind the -s.");
// Create an array of words
var words = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
];

// Pick up a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
	// Exit the game loop
	break;
    } else if (guess.length !== 1) {
	alert("Please enter a single letter.");
    } else {
	// Update the game state with the guess
	for (var j = 0; j < word.length; j++) {
	    if (word[j] === guess) {
		answerArray[j] = guess;
		remainingLetters--;
	    }
	}
    }
    // The end of the game loop
}

// Show the answer and congratulate the player
document.write("<p>" + answerArray.join(" ") + "</p>");
document.write("<p>Good job! The answer was " + word + "</p>");

