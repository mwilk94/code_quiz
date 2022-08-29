var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("highscore-button");

var button_A = document.getElementById("buttonA");
var button_B = document.getElementById("buttonB");
var button_C = document.getElementById("buttonC");
var button_D = document.getElementById("buttonD");

var submitInitialBtn = document.getElementById("submit-initial");
var playAgainBtn = document.getElementById("play-again");
var initialInput = document.getElementById("initial");

var mainPage = document.querySelector(".main-page");
var quizInProgress = document.querySelector(".quiz-in-progress");
var timerEl = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var answerCheck = document.querySelector(".answer-check");
var quizOver = document.querySelector(".quiz-over");
var ScorePage = document.querySelector(".score-page");
var scoreInitial = document.querySelector(".score-initial");


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
  
  quizInProgress.style.display = "none";
  quizOver.style.display = "none";
  ScorePage.style.display = "none";
  
  function beginQuiz() {
    quizInProgress.style.display = "block";
    mainPage.style.display = "none";
    ScorePage.style.display = "none";
    timerEl.textContent = 60;
    answerCheck.textContent = '';
    displayQuestions();
    handleInterval();
  }
  