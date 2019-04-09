$(document).ready(function () {

    var question1 = {
        question:"Which is not an American Car Manufacturer",
        answer1:"Ford",
        answer2:"GM",
        answer3:"Mazda",
        answer4:"Dodge",
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

    populateQuestion();

    function populateQuestion(){
        var selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
        $("#question").text(selectedQuestion.question);
        $("#answerChoice1").text(selectedQuestion.answer1);
        $("#answerChoice2").text(selectedQuestion.answer2);
        $("#answerChoice3").text(selectedQuestion.answer3);
        $("#answerChoice4").text(selectedQuestion.answer4);
    }

    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            doSomething();
        } else {
            $("#timer").text(timeLeft + ' seconds remaining');
            timeLeft--;
        }
    }

    function doSomething() {
        $("#timer").text("Time is up");
    }

});