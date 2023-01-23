let options = ['ROCK','PAPER','SCISSORS']

let userScore = 0;
let computerScore = 0;

let computerChoice;

let userChoice;

let result;

let finalResult;

let counter = 0;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divResult = document.querySelector(".result");

let buttons = document.querySelectorAll("button");

console.log(buttons)


function getComputerChoice() {
  // your code here!

  let computerOption = options[Math.floor(Math.random() * options.length)];

  return computerOption;

}


function game() {

 
  for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function() {

      if (counter < 5){

        if (i === 0){

          userChoice = 'ROCK'
          computerChoice = getComputerChoice();

          divResult.textContent = playRound(userChoice, computerChoice)

        }else if(i === 1){

          userChoice = 'PAPER';
          computerChoice = getComputerChoice();

          divResult.textContent = playRound(userChoice, computerChoice)
      
        }else if(i === 2){

          userChoice = 'SCISSORS';
          computerChoice = getComputerChoice();
          
          divResult.textContent = playRound(userChoice, computerChoice)

        }

        counter++;

      }else {

        if(userScore > computerScore){

          finalResult = "Final Result: Congratulations! You win" 
        
          }else if(userScore < computerScore){
            finalResult = "Final Result: Sorry! You lose" 
        
          }else{
            finalResult = "Final Result: Tie! "
          }
        
          divResult.textContent = finalResult;
         

        buttons[i].removeEventListener('click', arguments.callee);

        

        
      }


      // console.log('Button clicked');
    });
  }
}

game()



function playRound(playerSelection, computerSelection) {
  // your code here!


  if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')){

    result = "You Lose! Paper beats Rock"
    
    computerScore++;


  }else if((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')){
    
    result = "You Win! Rock beats Scissors"

    userScore++;


  }else if((playerSelection === 'ROCK') && (computerSelection === 'ROCK')){
    
    result = "A Tie! Please play again"


  }else if((playerSelection === 'PAPER') && (computerSelection === 'PAPER')){
    
    result = "A Tie! Please play again"


  }else if((playerSelection === 'PAPER') && (computerSelection === 'ROCK')){
    
    result = "You Win! Paper beats Rock"

    userScore++

  }else if((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')){
    
    result = "You Lose! Scissors beats Paper"

    computerScore++
   
  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'SCISSORS')){
    
    result = "A Tie! Please play again"

  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')){
    
    result = "You Lose! Rock beats Scissors"

    computerScore++

  }else if((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER')){
    
    result = "You Win! Scissors beats Paper"

    userScore++;

  }else{

    result = "Void! Please play again"

  }
  

  return "result: " + result;

}



