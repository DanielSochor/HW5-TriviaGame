$(document).ready(function () {

    //TODO: fix button border, time remaining so height doesn't change, colors

    function populateQuestion() {
        //$(".button").show();
        randomQuestionIndex = Math.floor(Math.random() * questionArray.length);
        randomQuestion = questionArray[randomQuestionIndex].question;
        shuffledAnswerArray = (questionArray[randomQuestionIndex].options).sort(function (a, b) { return 0.5 - Math.random() });
        for (var i = 0; i < shuffledAnswerArray.length; i++) {
            console.log(i);
            $(".button").show();
            //$(".button").show().text("Test");
            //$(".button").attr(i).text(shuffledAnswerArray[i]);

            $(".button [value=i]").text("test");
            $(".button [value='i']").text("test");
            //$(".button").value(i).text("test");
            //$(".button").value('i').text("test");
            //$(".button").value(1).text("test");
            //$(".button").value('1').text("test");
            //$("[.button][value=i]").text("test");
            //$("[.button][value='i']").text("test");
            //$('.button[attr="i"]').text(shuffledAnswerArray[i]);

            console.log(shuffledAnswerArray[i]);
        }
    }

    //shuffleAnswers();
    function shuffleAnswers() {        
        var guess = 1;
        console.log(questionArray[randomQuestionIndex].answer);
        if (guess == questionArray[randomQuestionIndex].answer) {
            console.log("your guess is correct");
        } else {
            console.log("your guess is incorrect");
        }

    }

    //shuffle questions and options

    //button hover is same for start and each option



    var availableQuestionsToGuess = 1;
    //var availableQuestionsToGuess = questionArray.length;
    var questionDisplayed = false;
    var randomQuestionIndex = 0;
    var randomQuestion = "";
    var shuffledAnswerArray = [];


    var answer = "button1";

    gameOpeningScreen();

    function gameOpeningScreen() {
        $(".button").hide();
        $("#button1").show().text("Start!");
    }

    $(".button").on("click", function () {
        buttonPressed = $(this).attr("id");
        game();
    });

    function game() {
        if (availableQuestionsToGuess > 0) {
            if (questionDisplayed == false) {
                populateQuestion();
                //countdown();
                timer();
                questionDisplayed = true;
                thereIsTimeLeft = true;
            } else if (buttonPressed == answer) {
                correctAnswer();
            } else if (buttonPressed != answer) {
                incorrectAnswer();
            } else {
                gameOver();
            }

        }

        function correctAnswer() {
            console.log("that is the correct answer");
            clearInterval(timerId);
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

        function PpopulateQuestion() {
            console.log("pop");
            
            var selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
            $("#question").text(selectedQuestion.question);
            $("#button1").text(selectedQuestion.answer1);
            $("#button2").text(selectedQuestion.answer2);
            $("#button3").text(selectedQuestion.answer3);
            $("#button4").text(selectedQuestion.answer4);
        }




        //reset timer value for answering questions and for showing correct answer
        //var timeIsUp = false;
        var time = 30;
        //var timerId = setInterval(countdown, 1000);
        function timer() {
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