document.write("<h1>Welcome to the Hang Man Game!</h1>");
document.write("<h2>Welcome to the Hang Man Game!</h2>");
document.write("<p>You have to find the word behind the -s.</p>");


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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// hangman
var hangman = function(x = 250, y = 250, incorrectGuess) {
    /*
      x = (typeof x !== 'undefined') ?  x : 350;
      y = (typeof y !== 'undefined') ?  y : 550;
    */
    ctx.strokeStyle = "Black";
    ctx.beginPath();
    switch (incorrectGuess) {
    case 0: // does nothing because it's the initial case
        break;
    case 1:
        ctx.strokeRect(x, y, 20, 20); // head
        break;
    case 2:
        ctx.moveTo(x+10, y+20); // trunc
        ctx.lineTo(x+10, y+65); // body
        break;
    case 3:
        ctx.moveTo(x-10, y+30); // left
        ctx.lineTo(x+10, y+40); // arm
        break;
    case 4:
        ctx.moveTo(x+30, y+30); // right
        ctx.lineTo(x+8, y+40); // arm
        break;
    case 5:
        ctx.moveTo(x+10, y+65); // left
        ctx.lineTo(x-10, y+90); // leg
        break;
    case 6:
        ctx.moveTo(x+10, y+65); // right
        ctx.lineTo(x+30, y+90); // leg
        break;
    case 7:
        ctx.moveTo(x+10, y-30); // top of the string
        ctx.lineTo(x+10, y); // bottom of the string
        break;
    case 8:
        ctx.moveTo(x+10, y-30); // right of the string
        ctx.lineTo(x-30, y-30); // left of the string
        break;
    case 9:
        ctx.moveTo(x-30, y-30); // top of the stick
        ctx.lineTo(x-30, y+110); // bottom of the stick
        break;
    case 10:
        ctx.moveTo(x-30, y+110); // left of the ground
        ctx.lineTo(x+60, y+110); // right of the ground
	document.write('<p style="color:red">You are dead!</p>');
        break;
    default:
        document.write('<p style="color:red">There is a problem!</p>');
    }
    ctx.stroke();
};

var remainingLetters = word.length;
var incorrectGuess = 0;


// The game loop
while (remainingLetters > 0 && incorrectGuess < 10) {
    var guessWell = false;
    // Show the player their progress
    document.write("<p>" + answerArray.join(" ") + "</p>");

    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        document.write("<p>Please enter a single letter.</p>");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
                guessWell = true;
            }
        }
        if (guessWell === false) {
            incorrectGuess++;
            if (incorrectGuess === 1) {
                document.write('<p style="color:red">You have done '+incorrectGuess+' incorrect guess!</p>');
                hangman(x = 75, y = 35, incorrectGuess);
            } else if (incorrectGuess > 1) {
                document.write('<p style="color:red">You have done '+incorrectGuess+' incorrect guesses!</p>');
                hangman(x = 75, y = 35, incorrectGuess);
            } else {
                document.write('<p style="color:red">Well done you have done only correct guesses!</p>')
            }
        }
    }
    // The end of the game loop
}

// Show the answer and congratulate the player
document.write("<p>" + answerArray.join(" ") + "</p>");
if (remainingLetters == 0 && incorrectGuess < 10) {
    document.write('<p style="color:green">Good job! The answer was ' + word + '</p>');
} else {
    document.write('<p style="color:red">Bad luck! The answer was ' + word + '</p>');
}
