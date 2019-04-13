$(document).ready(function () {

    //TODO: fix button border, time remaining so height doesn't change, colors
    var questionDisplayed = false;
    var shuffledQuestionArray = [];
    var shuffledAnswerArray = [];
    var correctAnswer = 0;
    var questionCounter = 0;
    var availableQuestionsToGuess = 0;

    gameOpeningScreen();

    function gameOpeningScreen() {
        $("#question #buttons").empty();
        $("#question").append('<div class="button">' + "Start!" + '</div>');
        randomizeAllQuestions();
    }

    function randomizeAllQuestions() {
        shuffledQuestionArray = (questionArray).sort(function (a, b) { return 0.5 - Math.random() });
        availableQuestionsToGuess = shuffledQuestionArray.length;
        console.log(shuffledQuestionArray);
        console.log(availableQuestionsToGuess);
    }

    //populateQuestionAndAnswers();
    function populateQuestionAndAnswers() {
        $("#question #buttons").empty();
        console.log(questionCounter);
        console.log(shuffledQuestionArray[questionCounter].question);
        $("#question").append('<div>' + shuffledQuestionArray[questionCounter].question + '</div>');
        shuffledAnswerArray = (shuffledQuestionArray[questionCounter].options).sort(function (a, b) { return 0.5 - Math.random() });
        console.log(shuffledAnswerArray);
        for (var i = 0; i < shuffledAnswerArray.length; i++) {
            console.log(i);
            console.log(shuffledAnswerArray[i]);
            $("#buttons").append('<div class="button">' + shuffledAnswerArray[i].answer + '</div>');
            if (shuffledAnswerArray[i].answer == shuffledQuestionArray[questionCounter].answer) {
                correctAnswer = shuffledQuestionArray[questionCounter].answer;
            }
        }
        questionCounter++;
    }

    $(".button").on("click", function () {
        buttonPressed = $(this).attr("id");
        game();
    });

    function game() {
        if (availableQuestionsToGuess > 0) {
            if (questionDisplayed == false) {
                populateQuestionAndAnswers();
                questionDisplayed = true;
            } else {
                //playGame

            }



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

        }

        function correctAnswer() {
            console.log("that is the correct answer");
            timer(true);
        }

        function incorrectAnswer() {
            console.log("that is not correct answer");
        }

        function outOfTime() {
            console.log("you ran out of time");
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
        var time = 30;
        //var timerId = setInterval(countdown, 1000);
        function timer(cancel) {
            if (cancel) {
                clearInterval(timerId)
            }
            var timerId = setInterval(countdown, 1000);
            function countdown() {
                if (time == -1) {
                    clearTimeout(timerId);
                    $("#timer").text("Time is up");
                    outOfTime();
                } else {
                    $("#timer").text(time + ' seconds remaining');
                    time--;
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
    }


});