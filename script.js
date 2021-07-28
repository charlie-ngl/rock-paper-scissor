function computerPlay(){
    random = Math.floor(Math.random() * 3) + 1;
    if(random === 1){
        cPlay = "rock";
    } else if(random === 2){
        cPlay = "paper";
    } else{
        cPlay = "scissors";
    }
    return cPlay;
}


function round(computer, player){
    if(computer === "rock" &&  player === "rock"){
        result = "You Draw!";
    } else if(computer === "paper" && player === "rock"){
        result = "You Lose! Paper beats Rock!";
    } else if(computer === "scissors" && player === "rock"){
        result = "You Win! Rock beats Scissors!";
    } else if(computer === "rock" &&  player === "paper"){
        result = "You Win! Paper beats Rock!";
    } else if(computer === "paper" && player === "paper"){
        result = "You Draw!";
    } else if(computer === "scissors" && player === "paper"){
        result = "You Lose! Scissors beats Paper!";
    } else if(computer === "rock" &&  player === "scissors"){
        result = "You Lose! Rock beats Scissors!";
    } else if(computer === "paper" && player === "scissors"){
        result = "You Win! Scissors beats Paper!";
    } else if(computer === "scissors" && player === "scissors"){
        result = "You Draw!";
    } else{
        result = "Your input is incorrect!";
    }

    return result;
}

function game(){
const computerSelection = computerPlay();
const playerSelection = prompt("Rock/Paper/Scissors").toLowerCase();

console.log(round(computerSelection, playerSelection));
}

game();