let options = ['ROCK','PAPER','SCISSORS']

let userScore = 0;
let computerScore = 0;
let total = 0;

let computerChoice;

let userChoice;

let finalResult;


function getComputerChoice() {
  // your code here!

  let computerOption = options[Math.floor(Math.random() * options.length)];

  return computerOption;

}


function playRound(playerSelection, computerSelection) {
  // your code here!

  let result = "";

  if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')){

    result = "You Lose! Paper beats Rock"
    
    computerScore++;
    total++;


  }else if((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')){
    
    result = "You Win! Rock beats Scissors"

    userScore++;
    total++;


  }else if((playerSelection === 'ROCK') && (computerSelection === 'ROCK')){
    
    result = "A Tie! Please play again"


  }else if((playerSelection === 'PAPER') && (computerSelection === 'PAPER')){
    
    result = "A Tie! Please play again"


  }else if((playerSelection === 'PAPER') && (computerSelection === 'ROCK')){
    
    result = "You Win! Paper beats Rock"

    userScore++
    total++;

  }else if((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')){
    
    result = "You Lose! Scissors beats Paper"

    computerScore++
    total++;

  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'SCISSORS')){
    
    result = "A Tie! Please play again"

  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')){
    
    result = "You Lose! Rock beats Scissors"

    computerScore++
    total++;

  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER')){
    
    result = "You Win! Scissors beats Paper"

    userScore++;
    total++;

  }else{

    result = "Void! Please play again"

  }
  

  return "result: " + result;

}



function game() {

  for (let i = 0; i < 5; i++){

    computerChoice = getComputerChoice();

    // console.log(computerChoice);
    
    userChoice = (window.prompt("Please enter your choice")).toUpperCase()

    console.log(playRound(userChoice, computerChoice))

    // window.location.reload();

    // setTimeout(function(){
    //   window.location.reload();
    // }, 8000);
    
  }

}

game()



if(userScore > computerScore){
  finalResult = "Final Result: Congratulations! You win " + userScore + "/" + total;

}else if(userScore < computerScore){
  finalResult = "Final Result: Sorry! You lose " + userScore + "/" + total;

}else{
  finalResult = "Final Result: Tie! " + userScore + "/" + total;
}

console.log(finalResult);


