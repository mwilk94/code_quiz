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
