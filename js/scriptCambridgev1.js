(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
        question: "When can we meet again?",
        answers: {
            a: "When are you free?",
            b: "It was two days ago.",
            c: "Can you help me?"
        },
        correctAnswer: "a"
    },
    {
        question: "My aunt is going to stay with me.",
        answers: {
            a: "How do you do?",
            b: "How long for?",
            c: "How was it?"
        },
        correctAnswer: "b"
    },
    {
        question: "When do you study?",
        answers: {
            a: "at school",
            b: "in the evenings",
            c: "in the library"
        },
        correctAnswer: "b"
    },
    {
        question: "Would you prefer lemonade or orange juice?",
        answers: {
            a: "Have you got anything else?",
            b: "If you like.",
            c: "Are you sure about that?"
        },
        correctAnswer: "a"
    },
    {
        question: "Let's have dinner now.",
        answers: {
            a: "You aren't eating.",
            b: "There aren't any.",
            c: "Tom isn't here yet."
        },
        correctAnswer: "c"
    },
    {
        question: "The snow was...heavily when I left the house.",
        answers: {
            a: "dropping",
            b: "landing",
            c: "falling",
            d: "descending"
        },
        correctAnswer: "c"
    },
    {
        question: "I can't find my keys anywhere - I...have left them at work.",
        answers: {
            a: "can",
            b: "must",
            c: "ought",
            d: "would"
        },
        correctAnswer: "b"
    },
    {
        question: "When a car pulled out in front of her, Jane did well not to...control of her bycicle.",
        answers: {
            a: "miss",
            b: "lose",
            c: "fail",
            d: "drop"
        },
        correctAnswer: "b"
    },
    {
        question: "According to Richard's...the train leaves at 7 o'clock.",
        answers: {
            a: "opinion",
            b: "advice",
            c: "knowledge",
            d: "information"
        },
        correctAnswer: "b"   
    },
    {
        question: "When you stay in a country for some time you get used to the people's...of life.",
        answers: {
            a: "habit",
            b: "custom",
            c: "way",
            d: "system"
        },
        correctAnswer: "c"   
    },
    {
        question: "The builders are...good progress with the new house.",
        answers: {
            a: "getting",
            b: "doing",
            c: "making",
            d: "taking"
        },
        correctAnswer: "c"   
    },
    {
        question: "She is now taking a more positive...to her studies and should do well.",
        answers: {
            a: "attitude",
            b: "behaviour",
            c: "manner",
            d: "style"
        },
        correctAnswer: "a"   
    },
    {
        question: "My father...his new car for two weeks now.",
        answers: {
            a: "has had",
            b: "has",
            c: "is having",
            d: "had"
        },
        correctAnswer: "a"   
    },
    {
        question: "What differences are there...the English spoken in the UK and the English spoken in the US?",
        answers: {
            a: "among",
            b: "between",
            c: "beside",
            d: "with"
        },
        correctAnswer: "b"   
    },
    {
        question: "At 6 p.m. I started to get angry with him because he was late...",
        answers: {
            a: "as usual",
            b: "in general",
            c: "typically",
            d: "usually"
        },
        correctAnswer: "a"   
    },
    {
        question: "...you get your father's permission, I'll take you skiing next weekend.",
        answers: {
            a: "Although",
            b: "Provided",
            c: "As",
            d: "Unless"
        },
        correctAnswer: "a"   
    },
    {
        question: "A local company has agreed to...the school team with football shirts.",
        answers: {
            a: "contribute",
            b: "supply",
            c: "give",
            d: "produce"
        },
        correctAnswer: "b"   
    },
    {
        question: "I really enjoy stories that are...in the distant future.",
        answers: {
            a: "found",
            b: "set",
            c: "put",
            d: "placed"
        },
        correctAnswer: "b"   
    },
    {
        question: "That old saucepan will come in...when we go camping.",
        answers: {
            a: "convenient",
            b: "fitting",
            c: "handy",
            d: "suitable"
        },
        correctAnswer: "c"   
    },
    {
        question: "Anyone...after the start of the play is not allowed in until the interval.",
        answers: {
            a: "arrives",
            b: "has arrived",
            c: "arriving",
            d: "arrived"
        },
        correctAnswer: "c"   
    },
    {
        question: "I didn't driving home in the storm so I stayed overnight in a hotel.",
        answers: {
            a: "fancy",
            b: "desire",
            c: "prefer",
            d: "want"
        },
        correctAnswer: "a"   
    },
    {
        question: "The judge said that those prepared to...in crime must be ready to suffer the consequences.",
        answers: {
            a: "involve",
            b: "engage",
            c: "undertake",
            d: "enlist"
        },
        correctAnswer: "b"   
    },
    {
        question: "Marianne seemed to take...at my comments on her work.",
        answers: {
            a: "annoyance",
            b: "insult",
            c: "offence",
            d: "indignation"
        },
        correctAnswer: "c"   
    },
    {
        question: "You should not have a dog if you are not...to look after it.",
        answers: {
            a: "prepared",
            b: "adapted",
            c: "arranged",
            d: "decided"
        },
        correctAnswer: "a"   
    },
    {
        question: "The farmhouse was so isolated that they had to generate their own electricity.",
        answers: {
            a: "current",
            b: "supply",
            c: "grid",
            d: "power"
        },
        correctAnswer: "b"   
    }
];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);

})();
