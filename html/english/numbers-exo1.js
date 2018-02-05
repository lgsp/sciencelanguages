
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var phone_nb1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var phone_nb2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function convertArrayIntoRandom(array, max) {
    for (step = 0; step < array.length; step++)
	array[step] = getRandomInt(max);
    return array;
};

phone_nb1 = convertArrayIntoRandom(phone_nb1, 10);
phone_nb2 = convertArrayIntoRandom(phone_nb2, 10);


function convertDigitsIntoPhoneNb(array, sizeOfChunk) {
    var result = "";
    for (step = 0; step < array.length; step++) {
	result += array[step];
	if ( ( (step % sizeOfChunk) == 1 ) && (step < (array.length - 1) ) )
	    result += '-';
    };
    return result;
};

function question(array) {
    document.write("<ol>");
    document.write("<li>");
    document.write("<p>How do you spell this phone number, digit by digit: " + array + " </p>");
    document.write("</li>");
    document.write("</ol>");
};

question(convertDigitsIntoPhoneNb(phone_nb1, 2));

function numberToEnglish(n, custom_join_character) {

    var string = n.toString(),
	units, tens, scales, start, end, chunks,
	chunksLen, chunk, ints, i, word, words;

    var and = custom_join_character || 'and';

    /* Is number zero? */
    if (parseInt(string) === 0) {
	return 'zero';
    }

    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six',
	     'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
	     'thirteen', 'fourteen', 'sixteen', 'seventeen',
	     'eighteen', 'nineteen'];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
	    'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion',
	      'quadrillion', 'quintillion', 'sextillion',
	      'septillion', 'octillion', 'nonillion', 'decillion',
	      'undecillion', 'duodecillion', 'tredecillion',
	      'quatttuor-decillion', 'quindecillion',
	      'sexdecillion', 'septen-decillion', 'octodecillion',
	      'novemdecillion', 'vigintillion', 'centillion'];

    /* Split user argument into 3 digit chunks from right to 
       left */
    start = string.length;
    chunks = [];
    while (start > 0) {
	end = start;
	chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to 
       stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
	return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

	chunk = parseInt(chunks[i]);

	if (chunk) {

	    /* Split chunk into array of individual integers */
	    ints = chunks[i].split('').reverse().map(parseFloat);

	    /* If tens integer is 1, i.e. 10, then add 10 to 
	       units integer */
	    if (ints[1] === 1) {
		ints[0] += 10;
	    }

	    /* Add scale word if chunk is not zero and array item 
	       exists */
	    if ((word = scales[i])) {
		words.push(word);
	    }

	    /* Add unit word if array item exists */
	    if ((word = units[ints[0]])) {
		words.push(word);
	    }

	    /* Add tens word if array item exists */
	    if ((word = tens[ints[1]])) {
		words.push(word);
	    }

	    /* Add 'and' string after units or tens integer if: */
	    if (ints[0] || ints[1]) {

		/* Chunk has a hundreds integer or chunk is the 
                   first of multiple chunks */
		if (ints[2] || !i && chunksLen) {
		    words.push(and);
		}
	    }

	    /* Add hundreds word if array item exists */
	    if ((word = units[ints[2]])) {
		words.push(word + ' hundred');
	    }
		
	}
    }

    return words.reverse().join(' ');
	    
};

numberToEnglish(1);

var active_or_not = prompt("Do you want to answer to this question right now? Yes or no? ");


function convertDigitArrayToWordsArray(digitArray) {
    var wordsArray = [];
    for (step = 0; step < digitArray.length; step++)
	wordsArray += ' ' + numberToEnglish(digitArray[step], ' ');
    return wordsArray;
};


if (active_or_not.toUpperCase() == "YES") {
    
    var solution1 = convertDigitArrayToWordsArray(phone_nb1);

    var credit = 0;

    for (step = 0; step < 10; step++) {
	var temp = prompt("How to spell " + phone_nb1[step] + ": ");
	var testLeft = temp.toUpperCase();
	document.write("<p>Type of testLeft = " + typeof testLeft + "</p>");
	var testRight = numberToEnglish(phone_nb1[step], ' ').toUpperCase();
	document.write("<p>Type of testRight = " + typeof testRight + "</p>");
	alert(testLeft === testRight);
	alert(testLeft == testRight);
	if (testLeft === testRight) {
	    credit++;
	    alert("You've done good job! Keep going!");
	} else {
	    alert("That's not the right answer. Keep going and when you finish go check the solution.");
	    document.write("<p style='color: red; font-size: 1.25em;'>Your answer is " + testLeft + "</p>");
	    document.write("<p style='color: green; font-size: 1.5em;'>The right answer is " + testRight + "</p>");
	};
    };

    document.write("<p style='color: green;'>The complete solution is: " + solution1.toUpperCase() + "</p>"); 
    
    switch (credit) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
	document.write("<p style='color: red;'>YOU HAVE TO READ THE LESSON AGAIN AND AGAIN UNTIL YOU GET MORE THAN 6!</p>");
	document.write("<p style='color: red;'>BECAUSE RIGHT NOW YOU'VE GOT " + credit + " ON 10... </p>");
	break;
    case 6:
    case 7:
	document.write("<p>YOU NEED SOME PRACTICE. YOU'VE GOT " + credit + " ON 10. KEEP WORKING!</p>");
	break;
    case 8:
    case 9:
	document.write("<p style='color: orange;'>GOOD YOU'VE GOT " + credit + " on 10, THAT'S A GOOD JOB. KEEP GOING AND MAYBE NEXT TIME YOU'LL GET A PERFECT SCORE!</p>");
	break;
    case 10:
	document.write("<p style='color: green;'>EXCELLENT! YOU'VE GOT " + credit + " on 10, THAT'S PERFECT!</p>");
	break;
    default:
	document.write("<p style='color: red;'>THERE IS A PROBLEM SOMEWHERE!</p>");
    };

};
