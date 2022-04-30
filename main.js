const computerChoices = ['rock', 'paper', 'scissors'];

function computerPlay(){
    let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return result;
}
playerSelection = '';
let computerSelection = computerPlay();
let draw = 'Draw';
let win = `You win ${playerSelection} beats ${computerSelection}`;
let lost = `You lost ${computerSelection} beats ${playerSelection}`;
let playerScore = 0;
let computerScore = 0;



function singleGame(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("draw");
        return draw;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        document.getElementById("score").innerHTML =`You win ${playerSelection} beats ${computerSelection}`;
        return ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        document.getElementById("score").innerHTML =`You win ${playerSelection} beats ${computerSelection}`;
        return ++playerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        document.getElementById("score").innerHTML =`You win ${playerSelection} beats ${computerSelection}`;
        return ++playerScore;
    }
    else{
        document.getElementById("score").innerHTML =`You lost ${computerSelection} beats ${playerSelection}`;
        return ++computerScore;
    }
}

function game() {

    for (i = 0; i < 5; i++){
        playerSelection = prompt("Rock-Paper-Scissors").toLowerCase(); //Insert player choice and make it lowercase
        if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){ //Check if it is correct
            i = i - 1;
            console.log(`What is ${playerSelection}`);
        }
        else {singleGame(playerSelection, computerPlay()); //If correct play single game
        }
    }
        
    if(playerScore > computerScore) { //count scores and declare winner
        document.getElementById("result").innerHTML = `You won with ${playerScore} points against computer with ${computerScore} points`;
    }
    else if(playerScore < computerScore){
        document.getElementById("result").innerHTML = `You lost with ${playerScore} points against computer with ${computerScore} points`;
    }
    else{
        document.getElementById("result").innerHTML = `It is draw. You both have ${playerScore} points`;
    }
}

