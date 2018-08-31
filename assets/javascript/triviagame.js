$(document).ready(function() {

var clockRunning = false;
var timeRemaining = 15;
var index = 0;
$("#timeRemaining").text(timeRemaining);

var questions = [
    {
        q: "what is this fruit? <img src='../images/creme_brulee.jpg'>",
        o: ["lychee", "apple", "banana", "dragonfruit"],
        a: "lychee"
    },
    {
        q: "what is this knife used for?",
        o: ["de-boning", "murder", "cutting steak", "fighting"],
        a: "de-boning"
    },
    {
        q: "What is this kitchen machine?",
        o: ["oven", "DJ station", "crepe machine", "washing machine"],
        a: "crepe machine"
    },
    {
        q: "What herb is this?",
        o: ["grass", "rosemary", "dank weed", "basil"],
        a: "basil"
    },
    {
        q: "Which is an ingredient in 'creme brulee'?",
        o: ["molasses", "cream", "flour", "egg whites"],
        a: "cream"
    }
]

function game() {
$("#question").html(questions[index].q);
$("#optionA").html(questions[index].o[0]);
$("#optionB").html(questions[index].o[1]);
$("#optionC").html(questions[index].o[2]);
$("#optionD").html(questions[index].o[3]);
}   

game();

// checks if guess is correct or wrong
$(".options").click(function(){
    var guess = $(this).text();

    if (guess === questions[index].a){
        index++;
        game();
        alert("correct!");
    }
    else {
        alert("wrong");
        index++;
        game();
    }
})






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
}


})