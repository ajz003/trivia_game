$(document).ready(function() {

var clockRunning = false;
var timeRemaining = 15;
var index = 0;
var count = 0;
var correct = 0;
var incorrect = 0;

$("#timeRemaining").text(timeRemaining);

var questions = [
    {
        q: "what is this fruit? <br> <img src='assets/images/lychee.jpg'>",
        o: ["lychee", "apple", "banana", "dragonfruit"],
        a: "lychee"
    },
    {
        q: "what is this knife used for? <br> <img src='assets/images/boning_knife.jpg'>",
        o: ["de-boning", "murder", "cutting steak", "fighting"],
        a: "de-boning"
    },
    {
        q: "What is this kitchen machine? <br> <img src='assets/images/crepe_machine.jpg'>",
        o: ["oven", "DJ station", "crepe machine", "washing machine"],
        a: "crepe machine"
    },
    {
        q: "What herb is this? <br> <img src='assets/images/basil.jpg'>",
        o: ["grass", "rosemary", "dank weed", "basil"],
        a: "basil"
    },
    {
        q: "Which is an ingredient in 'creme brulee'? <br> <img src='assets/images/creme_brulee.jpg'>",
        o: ["molasses", "cream", "flour", "egg whites"],
        a: "cream"
    },
    {
        q: "useless",
        o: "also useless",
        a: "very useless"
    }
]

// checks if guess is correct or wrong 
$(".options").click(function(){
    var guess = $(this).text();
    reset();
    if (guess === questions[index].a) {
        index++;
        correct++;
        alert("correct!");
        game();   
    }
    else {
        index++;
        incorrect++;
        alert("wrong");
        game();
    }
    if (index === 5) {
        total();
    }
})

function game() {
$("#question").html(questions[index].q);
$("#optionA").html(questions[index].o[0]);
$("#optionB").html(questions[index].o[1]);
$("#optionC").html(questions[index].o[2]);
$("#optionD").html(questions[index].o[3]);
}   

function total() {
    $("body").empty();
    $("body").html("correct: " + correct + "<br>" + "incorrect: " + incorrect);
}

function gameOver() {
    if (timeRemaining === 0) {
        stop();
        var body = $("body")
        body.empty();
        body.css("background-image", "url('assets/images/you_died.png')");
        body.css("left", "50%");
}};

function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
}
}
  
function stop() {
    clockRunning = false;
    clearInterval(intervalId);
}

function reset() {
    timeRemaining = 15;
    $("#timeRemaining").text(timeRemaining);  
}

function count() {
    timeRemaining--;
    $("#timeRemaining").text(timeRemaining);
    gameOver();
}

game();
start();

})