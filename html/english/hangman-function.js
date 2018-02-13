var pickWord = function(words) {
    // Return a random word
    var randomIndex = Math.floor(Math.random() * Math.floor(words.length));
    return words[randomIndex];
};

var setupAnswerArray = function (word) {
    // Return the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
    }
    return answerArray;
};

var showPlayerProgress = function (answerArray) {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};

var getGuess = function () {
    // Use prompt to get a guess
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
    /* 
       Update answerArray and return a number 
       showing how many times the guess appears 
       in the word so remainingLetters can be 
       updated
    */
    for (var j = 0; j < word.length; j++) {
	if (word[j] === guess) {
	    answerArray[j] = guess;
	    remainingLetters--;
	}
    }
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    /*
      Use alert to show the answer and congratulate
      the player
    */
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);

};

var words = ['one', 'two', 'three', 'four', 'five',
	     'six', 'seven', 'eight', 'nine', 'ten',
	     'eleven', 'twelve', 'thirteen', 'fourteen',
	     'fifteen', 'sixteen', 'seventeen',
	     'eighteen', 'nineteen'];

var word = pickWord(words);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
	break;
    } else if (guess.length !== 1) {
	alert("Please enter a single letter.");
    } else {
	var correctGuesses = updateGameState(guess, word, answerArray);
	remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);
