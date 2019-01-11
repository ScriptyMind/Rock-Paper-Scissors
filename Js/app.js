// Defining global variables needed
var UserScore_var = 0;
var RowCount_var = 0;
var CompScore_var = 0;

// Dumps
var UserScore_h1 = document.getElementById("UserScore");
var RowCount_h3 = document.getElementById("RowCount");
var CompScore_h1 = document.getElementById("CompScore");
var Statement_h1 = document.getElementById("Statement");
var Rock_img = document.getElementById("rock");
var Paper_img = document.getElementById("paper");
var Scisoor_img = document.getElementById("scissor");

// get choice name from shortned version 
function getChoiceName(letter) {
    switch (letter) {
        case 'r' :
            return "Rock";
        case 's' : 
            return "Scissor";
        case 'p' : 
            return "Paper";
    }
}

// functions to get scores
function win(UserChoice, CompChoice) {
    UserScore_var++;
    Statement_h1.innerHTML = getChoiceName(UserChoice) + " Beats " + getChoiceName(CompChoice) + ", You Win !";
    UserScore_h1.innerHTML = UserScore_var;
    document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.add("win");
    setTimeout(function () {
        document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.remove("win");
    }, 300);
}

function loss(UserChoice, CompChoice) {
    CompScore_var++;
    Statement_h1.innerHTML = getChoiceName(CompChoice) + " Beats " + getChoiceName(UserChoice) + ", You Loss !";
    CompScore_h1.innerHTML = CompScore_var;
    document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.add("loss");
    setTimeout(function () {
        document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.remove("loss");
    }, 300);
}

function draw(Choice) {
    Statement_h1.innerHTML = getChoiceName(Choice) + " Equals " + getChoiceName(Choice) + ", It's a draw !";
    document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.add("draw");
    setTimeout(function () {
        document.getElementById(getChoiceName(UserChoice).toLowerCase()).classList.remove("draw");
    }, 1200);
}

// Get a random choice 
function getCompChoice(){
    var choice = ['r', 'p', 's'];
    var randomNum = Math.floor(Math.random() * 3);
    return choice[randomNum];
}

// Defining the main play function
function play(choice){
    var compChoice = getCompChoice();
    RowCount_var++;
    RowCount_h3.innerHTML = RowCount_var;
    switch (choice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(choice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(choice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loss(choice, compChoice);
            break;
    }
}


function main(){
    // Add Event listeners to the choices images
    Rock_img.addEventListener('click', function(){
        play("r");
    })

    Paper_img.addEventListener('click', function(){
        play("p");
    })

    Scisoor_img.addEventListener('click', function(){
        play("s");
    })
}

main();
