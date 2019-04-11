$(document).ready(function () {

    //TODO: fix button border, time remaining so height doesn't change, colors


    shuffleAnswers();






    

    function shuffleAnswers() {


        console.log("questions in array: " + questionArray.length);

        var randomQuestionIndex = Math.floor(Math.random() * questionArray.length);
        console.log("randomly selected question index: " + randomQuestionIndex);

        var randomQuestion = questionArray[randomQuestionIndex].question;
        console.log("randomly selected question: " + randomQuestion);

        var randomQuestionAnswers = questionArray[randomQuestionIndex].options;
        console.log("answers for randomly selected question: " + randomQuestionAnswers);
        for (var i = 0; i < questionArray[randomQuestionIndex].options.length; i++) {
            console.log(questionArray[randomQuestionIndex].options[i]);
        }
        var shuffledAnswerArray = (questionArray[randomQuestionIndex].options).sort(function (a, b) { return 0.5 - Math.random() });
        console.log("shuffled answers: " + shuffledAnswerArray);
        for (var i = 0; i < shuffledAnswerArray.length; i++) {
            console.log(shuffledAnswerArray[i]);
        }
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

    var question1 = {
        question: "Which is not an American Car Manufacturer",
        answer1: "Ford",
        answer2: "GM",
        answer3: "Mazda",
        answer4: "Dodge",
    }

    var question2 = {
        question: "Which is not an cornerstone technology of the World Wide Web?",
        answer1: "HTML",
        answer2: "CSS",
        answer3: "JavaScript",
        answer4: "SQL",
    }

    var question3 = {
        question: "Who is the current president?",
        answer1: "Trump",
        answer2: "Rump",
        answer3: "Bump",
        answer4: "Stump",
    }

    var answers = {
        question1: 3,
        question2: 4,
        question3: 1
    }

    var questions = [question1, question2, question3];

    var availableQuestionsToGuess = 1;
    var questionDisplayed = false;
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

        function populateQuestion() {
            console.log("pop");
            $(".button").show();
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