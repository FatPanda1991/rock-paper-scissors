let playerScore = 0;
let computerScore = 0;
let resetButton;

function game(playerSelection) {
    document.getElementById(`Rock`).style.boxShadow = null;
    document.getElementById(`Paper`).style.boxShadow = null;
    document.getElementById(`Scissors`).style.boxShadow = null;
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerPlay();

    function computerPlay(){
        let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        document.getElementById(`${result}`).style.boxShadow = "0px 0px 12px 4px rgb(219, 62, 22)";
        return result;
    }
    if(playerSelection === computerSelection){
        document.getElementById("result").innerHTML = "Draw";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
             beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
        checkScore()
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
            beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
        checkScore()
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
            beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
        checkScore()
    }
    else{
        document.getElementById("result").innerHTML = `You lost ${computerSelection} 
            beats ${playerSelection}`;
        ++computerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
        checkScore()
    }
}

function checkScore() {
    if (playerScore == 5){
        document.getElementById("outcome").innerHTML = 'You won!';
        gameOver()
    }
    else if (computerScore == 5) {
        document.getElementById("outcome").innerHTML = 'You lost!';
        gameOver()
    }
    else {
        return
    }
}

function gameOver(){
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("reset").style.display="block"
}

function resetGame() {
    document.getElementById(`Rock`).style.boxShadow = null;
    document.getElementById(`Paper`).style.boxShadow = null;
    document.getElementById(`Scissors`).style.boxShadow = null;
    document.getElementById("btn-1").disabled = false;
    document.getElementById("btn-2").disabled = false;
    document.getElementById("btn-3").disabled = false;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML = `Your score is ${playerScore} 
        <br> Computer score is ${computerScore}`
    document.getElementById("reset").style.display="none"
}


function gameInf(playerSelection) {
    
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerPlay();

    function computerPlay(){
        let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
            return result;
    }
    if(playerSelection === computerSelection){
        document.getElementById("result").innerHTML = "Draw";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
            beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore}
             <br> Computer score is ${computerScore}`
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
            beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("result").innerHTML = `You win ${playerSelection} 
            beats ${computerSelection}`;
        ++playerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
    }
    else{
        document.getElementById("result").innerHTML = `You lost ${computerSelection} 
            beats ${playerSelection}`;
        ++computerScore;
        document.getElementById("score").innerHTML = `Your score is ${playerScore} 
            <br> Computer score is ${computerScore}`
    }
}















// const computerChoices = ['rock', 'paper', 'scissors'];

// function computerPlay(){
//     let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//     return result;
// }
// playerSelection = '';
// let computerSelection = computerPlay();
// let draw = 'Draw';
// let win = `You win ${playerSelection} beats ${computerSelection}`;
// let lost = `You lost ${computerSelection} beats ${playerSelection}`;
// let playerScore = 0;
// let computerScore = 0;



// function singleGame(playerSelection, computerSelection){
//     if(playerSelection === computerSelection){
//         console.log("draw");
//         return draw;
//     }
//     else if(playerSelection === 'rock' && computerSelection === 'scissors'){
//         console.log(`You win ${playerSelection} beats ${computerSelection}`);
//         return ++playerScore;
//     }
//     else if(playerSelection === 'paper' && computerSelection === 'rock'){
//         console.log(`You win ${playerSelection} beats ${computerSelection}`);
//         return ++playerScore;
//     }
//     else if(playerSelection === 'scissors' && computerSelection === 'paper'){
//         console.log(`You win ${playerSelection} beats ${computerSelection}`);
//         return ++playerScore;
//     }
//     else{
//         console.log(`You lost ${computerSelection} beats ${playerSelection}`);
//         return ++computerScore;
//     }
// }

// function game() {

//     for (i = 0; i < 5; i++){
//         playerSelection = prompt("Rock-Paper-Scissors").toLowerCase();
//         singleGame(playerSelection, computerPlay());
//         if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
//             i = i - 1;
//         }
//     }
        
//     if(playerScore > computerScore) {
//         console.log('win');
//     }
//     else if(playerScore < computerScore){
//         console.log('loser');
//     }
//     else{
//         console.log('draw')
//     }
