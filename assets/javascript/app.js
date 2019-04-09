$(document).ready(function () {

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