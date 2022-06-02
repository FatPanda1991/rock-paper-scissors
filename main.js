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
        document.getElementById(`${result}`).style.boxShadow = "0px 0px 12px 4px rgb(212, 0, 0)";
        return result;
    }
    if(playerSelection === computerSelection){
        document.getElementById("result").innerHTML += "<br>Draw<br>";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
             beats ${computerSelection}<br>`;
        ++playerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
        checkScore()
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
            beats ${computerSelection}<br>`;
        ++playerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
        checkScore()
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
            beats ${computerSelection}<br>`;
        ++playerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
        checkScore()
    }
    else{
        document.getElementById("result").innerHTML += `<br>You lost ${computerSelection} 
            beats ${playerSelection}<br>`;
        ++computerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
        checkScore()
    }
}

function checkScore() {
    if (playerScore == 5){
        document.getElementById("result").classList.add("win");
        document.getElementById("result").innerHTML = 'You won!';
        gameOver()
    }
    else if (computerScore == 5) {
        document.getElementById("result").classList.add("lose");
        document.getElementById("result").innerHTML = 'You lost!';
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
    document.getElementById("result").classList.remove("win");
    document.getElementById("result").classList.remove("lose");
    document.getElementById(`Rock`).style.boxShadow = null;
    document.getElementById(`Paper`).style.boxShadow = null;
    document.getElementById(`Scissors`).style.boxShadow = null;
    document.getElementById("btn-1").disabled = false;
    document.getElementById("btn-2").disabled = false;
    document.getElementById("btn-3").disabled = false;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("reset").style.display="none";
    document.getElementById("plrScore").innerHTML="0";
    document.getElementById("compScore").innerHTML="0";
}


function gameInf(playerSelection) {
    document.getElementById(`Rock`).style.boxShadow = null;
    document.getElementById(`Paper`).style.boxShadow = null;
    document.getElementById(`Scissors`).style.boxShadow = null;
    
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerPlay();

    function computerPlay(){
        let result = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        document.getElementById(`${result}`).style.boxShadow = "0px 0px 12px 4px rgb(212, 0, 0)";
            return result;
    }
    if(playerSelection === computerSelection){
        document.getElementById("result").innerHTML += "<br>Draw<br>";
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
        beats ${computerSelection}<br>`;
         ++playerScore;
         document.getElementById("compScore").innerHTML = `${computerScore}`;
         document.getElementById("plrScore").innerHTML = `${playerScore}`;
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
             beats ${computerSelection}<br>`;
        ++playerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        document.getElementById("result").innerHTML += `<br>You win ${playerSelection} 
             beats ${computerSelection}<br>`;
        ++playerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
    }
    else{
        document.getElementById("result").innerHTML += `<br>You lost ${computerSelection} 
            beats ${playerSelection}<br>`;
        ++computerScore;
        document.getElementById("compScore").innerHTML = `${computerScore}`;
        document.getElementById("plrScore").innerHTML = `${playerScore}`;
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
