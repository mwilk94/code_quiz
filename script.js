var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("highscore-button");

var button_A = document.getElementById("buttonA");
var button_B = document.getElementById("buttonB");
var button_C = document.getElementById("buttonC");
var button_D = document.getElementById("buttonD");

var submitInitialBtn = document.getElementById("submit-initial");
var playAgainBtn = document.getElementById("play-again");
var initialInput = document.getElementById("initial");

var mainPageEl = document.querySelector(".main-page");
var quizInProgressEl = document.querySelector(".quiz-in-progress");
var timerEl = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var answerCheckEl = document.querySelector(".answer-check");
var quizOverEl = document.querySelector(".quiz-over");
var finalScoreEl = document.querySelector(".final-score");
var highScorePageEl = document.querySelector(".score-page");
var scoreInitialEl = document.querySelector(".score-initial");


// Declare and Initialize variables
var timerCountDown = 60;
var questionIndex = 0;
var score = 0;
var timerInterval;

// array of questions
let questionLists = [
    {
      question: "1.How to write an IF statement in JavaScript?",
      optionA: "A: if i = 5",
      optionB: "B: if i = 5 then ",
      optionC: "C: if i == 5 then",
      optionD: "D: if (i == 5)",
      answer: "D"
    },
    {
      question: "2. How do you round the number 7.25, to the nearest integer??",
      optionA: "A: Math.round(7.25)",
      optionB: "B: rnd(7.25)",
      optionC: "C: round(7.25)",
      optionD: "D: Math.rnd(7.25)",
      answer: "A"
    },
    {
      question: "3. How do you create a function in JavaScript?",
      optionA: "A: function, myFunction()",
      optionB: "B: function:myFunction()",
      optionC: "C: function myFunction()",
      optionD: "D: function = myFunction()",
      answer: "C"
    },
    {
      question: "4. What will the following code return: Boolean(10 > 9)",
      optionA: "A: NaN",
      optionB: "B: true",
      optionC: "C: undefined",
      optionD: "D: false",
      answer: "B"
    }
  ]
  
  // feature display - disappear
  
  quiz.style.display = "none"
  finalSocre.style.display = "none"
  
  function beginQuiz() {
    introText.innerHTML = ""
    startBtn.style.display = "none"
    quiz.style.display = "block"
    question.innerHTML = questionLists[iterationNumber].question;
    answerA.innerHTML = questionLists[iterationNumber].optionA;
    answerB.innerHTML = questionLists[iterationNumber].optionB;
    answerC.innerHTML = questionLists[iterationNumber].optionC;
    answerD.innerHTML = questionLists[iterationNumber].optionD;
  }
  