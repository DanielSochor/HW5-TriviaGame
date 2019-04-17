$(document).ready(function () {

    //Code is verbose because it shuffles the questions and shuffles the answers for each question

    var shuffledQuestionArray = [];
    var shuffledAnswerArray = [];
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var questionCounter = 0;
    var availableQuestionsToGuess = 0;
    var countDownTime = 0;
    var correctAnswerButton = 0;
    var intervalId;
    var answerSelected = false;

    gameOpeningScreen();

    function gameOpeningScreen() {
        questionCounter = 0;
        $("#timer, #question, #buttonSection, #playAgain").empty();
        var startButton = $("<button>");
        startButton.addClass("button");
        startButton.text("Start!");
        $("#question").append(startButton);
        randomizeAllQuestions();
    }

    function randomizeAllQuestions() {
        shuffledQuestionArray = (questionArray).sort(function (a, b) { return 0.5 - Math.random() });
        availableQuestionsToGuess = shuffledQuestionArray.length;
        console.log(shuffledQuestionArray);
        console.log(availableQuestionsToGuess);
    }

    function populateQuestionAndAnswers() {    
    if (questionCounter < availableQuestionsToGuess) {
        console.log("question counter: " + questionCounter);
        console.log("available quetions to guess: " + availableQuestionsToGuess);
        answerSelected = false;
        $("#question, #buttonSection").empty();
        console.log(questionCounter);
        console.log(shuffledQuestionArray[questionCounter].question);
        $("#question").append('<div>' + shuffledQuestionArray[questionCounter].question + '</div>');
        shuffledAnswerArray = (shuffledQuestionArray[questionCounter].options).sort(function (a, b) { return 0.5 - Math.random() });
        console.log(shuffledAnswerArray);
        for (var i = 0; i < shuffledAnswerArray.length; i++) {
            console.log(shuffledAnswerArray[i]);
            var answerButton = $("<button>");
            answerButton.addClass("button");
            answerButton.attr("value", i);
            answerButton.text(shuffledAnswerArray[i].answer);
            $("#buttonSection").append(answerButton);
            if (shuffledAnswerArray[i].number == shuffledQuestionArray[questionCounter].answer) {
                correctAnswer = shuffledAnswerArray[i].number;
                correctAnswerButton = answerButton.attr("value");
            }
        }
        countDownTime = 10;
        timer();
        questionCounter++;
    } else {
            showScore()
        }
    }

    $(document).on("click", ".button", function () {
        var buttonText = $(this).text();
        if (buttonText == "Start!") {
            populateQuestionAndAnswers();
        } else if (($(this).attr("value") != null) && (answerSelected == false)) {
            answerSelected = true;
            clearInterval(intervalId);
            clearTimeout(intervalId);
            if ($(this).attr("value") == correctAnswerButton) {
                console.log("answer is correct!");
                $(this).addClass("buttonCorrect");
                answerIsCorrect();
            } else {
                $(this).addClass("buttonNotCorrect");
                answerIsNotCorrect();
            }
        } else if (buttonText == "Play Again?"){
            gameOpeningScreen();
        } else {
            console.log("nothing here");
        }
    });

    function timer() {
        $("#timer").text("You have " + countDownTime + ' seconds remaining');
        intervalId = setInterval(count, 1000);
    }

    function count() {
        if (countDownTime == 0) {
            clearTimeout(intervalId);
            $("#timer").text("Time is up!");
            outOfTime();
        } else {
            countDownTime--;
            $("#timer").text("You have " + countDownTime + ' seconds remaining');
        }
    }

    function timerNotDisplayed() {
        intervalId = setInterval(countNotDisplayed, 1000);
    }

    function countNotDisplayed() {
        if (countDownTime == 0) {
            clearTimeout(intervalId);
            populateQuestionAndAnswers()
        } else {
            countDownTime--;
        }
    }

    function answerIsCorrect() {
        $("#timer").text('You are correct!');
        countDownTime = 3;
        timerNotDisplayed();
        correctAnswers++;
    }

    function answerIsNotCorrect() {
        $("#timer").text('You are not correct!');
        countDownTime = 3;
        timerNotDisplayed();
        incorrectAnswers++;
    }

    function outOfTime() {
        console.log("You ran out of time");
        countDownTime = 3;
        timerNotDisplayed();
        unansweredQuestions++;
    }

    function showScore() {
        console.log("Show your score");
        $("#timer").text('Your results:');
        $("#question, #buttonSection").empty();
        $("#question").append('<div>' + "Correct answers: " + correctAnswers + '</div>');
        $("#question").append('<div>' + "Incorrect answers: " + incorrectAnswers + '</div>');
        $("#question").append('<div>' + "Unanswered questions: " + unansweredQuestions + '</div>');
        var restartButton = $("<button>");
        restartButton.addClass("button");
        restartButton.text("Play Again?");
        $("#playAgain").append(restartButton);
    }

});