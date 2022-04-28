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
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return ++playerScore;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return ++playerScore;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return ++playerScore;
    }
    else{
        console.log(`You lost ${computerSelection} beats ${playerSelection}`);
        return ++computerScore;
    }
}

function game() {

    for (i = 0; i < 5; i++){
        playerSelection = prompt("Rock-Paper-Scissors").toLowerCase();
        singleGame(playerSelection, computerPlay());
        if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
            i = i - 1;
        }
    }
        
    if(playerScore > computerScore) {
        console.log('win');
    }
    else if(playerScore < computerScore){
        console.log('loser');
    }
    else{
        console.log('draw')
    }
}
console.log(game());