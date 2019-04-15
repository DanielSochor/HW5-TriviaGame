$(document).ready(function () {

    //TODO: fix button border, time remaining so height doesn't change, colors
    var questionDisplayed = false;
    var shuffledQuestionArray = [];
    var shuffledAnswerArray = [];
    var correctAnswer = 0;
    var questionCounter = 0;
    var availableQuestionsToGuess = 0;
    var countDownTime = 0;
    var correctAnswerButton = 0;

    gameOpeningScreen();

    function gameOpeningScreen() {
        $("#question, #buttonSection").empty();
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
        questionCounter++;
    }

    $(document).on("click", ".button", function () {
        var buttonText = $(this).text();
        if (buttonText == "Start!") {
            populateQuestionAndAnswers();
        } else if ($(this).attr("value") != null) {
            if ($(this).attr("value") == correctAnswerButton){
                console.log("answer is correct!");
            } else {
                console.log("answer is incorrect");
            }
        } else {
            console.log("fill for last else");
        }
    });

    function game() {
        if (availableQuestionsToGuess > 0) {
            if (questionDisplayed == false) 
                questionDisplayed = true;
                countDownTime = 3;
                timer();
            } else if (countDownTime == 0) {
                outOfTime();
            } else {

            }

        } 
            //playGame

  
        //     //countdown();
        //     timer();
        //     questionDisplayed = true;
        //     thereIsTimeLeft = true;
        // } else if (buttonPressed == answer) {
        //     correctAnswer();
        // } else if (buttonPressed != answer) {
        //     incorrectAnswer();
        // } else {
        //     gameOver();
        // }

    

    function correctAnswer() {
        console.log("that is the correct answer");
        timer(true);
    }

    function incorrectAnswer() {
        console.log("that is not correct answer");
    }

    function outOfTime() {
        console.log("you ran out of time");
        $("#correctAnswer").text("<div> + The correct answer is: </div>");
    }

    function showCorrectAnswer() {
        time = 5
        timer()
    }

    function gameOver() {
        console.log("you ran out of time");
        //show score
        //show replay button
    }

    //reset timer value for answering questions and for showing correct answer
    //var timeIsUp = false;
    //var timerId = setInterval(countdown, 1000);
    function timer(l) {
        // if (cancel) {
        //     clearInterval(timerId)
        // }
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            //console.log("timer is: " + countDownTime);
            if (countDownTime == -1) {
                clearTimeout(timerId);
                $("#timer").text("Time is uP");
                //outOfTime();
            } else {
                $("#timer").text(countDownTime + ' seconds remaining');
                countDownTime--;
            }
            //return (time);
        }
    }



    // var countDown = 0;
    // var answer = 1;

    // function gamle() {
    //     $(".button").show();
    //     console.log("game");
    //     if (availableQuestionsToGuess > 0) {
    //         time = 30;
    //         countdown(time);
    //         populateQuestion();
    //         if (time >= 0) {
    //             if (answer = 1) {
    //                 // you are correct
    //                 console.log("you are correct");
    //             } else {
    //                 //ancser is false
    //                 //timer is 5 seconds
    //                 correctAnswer();
    //                 //call game()
    //             }
    //         } else {
    //             //run out of time
    //             correctAnswer();
    //         }
    //     } else {
    //         //show results
    //         //show play again
    //     }
    // }

});