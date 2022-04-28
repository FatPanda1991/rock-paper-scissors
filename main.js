const computerChoices = ['rock', 'paper', 'scissors'];

function computerPlay(){
    let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return result;
}

let computerSelection = computerPlay();
let playerSelection = prompt("Rock-Paper-Scissors").toLowerCase();


function singleGame(playerSelection, computerSelection){
    if(playerSelection != 'rock' || 'paper' || 'scissors'){
        console.log("WTF is that");
    }
    else if(playerSelection === computerSelection){
        console.log("draw");
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    }
    else(
        console.log(`You lost ${computerSelection} beats ${playerSelection}`)
    )
}


console.log(singleGame(playerSelection, computerSelection));