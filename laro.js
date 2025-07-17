// Rock, Paper, Scissors Game
// Function to get computer's choice
    function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomAnswer = Math.floor(Math.random() * choices.length);
    return choices[randomAnswer];
}
// human choice function
    function getHumanChoice(){
    return prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
}


function playGame() {

function playGame(){
 
    var humanScore = 0;
    var computerScore = 0;

    

    function determineWinner(message,humanScore, computerScore){
    const resultMessage = `${message} \nFinal Score: You ${humanScore} - Computer ${computerScore}`;
    alert(resultMessage);
}


    // Scoring System and Game Logic/ arguments Rounds
    function playRound(getHumanChoice,getComputerChoice){

    getComputerChoice = getComputerChoice.toLowerCase();
    getHumanChoice = getHumanChoice.toLowerCase();



// Check for tie and other conditions like win or lose
    if(getHumanChoice === getComputerChoice){
        return "It's a tie!";
    }
    let result= " ";

    // Rock logic
    if(getHumanChoice === "rock"){
        if(getComputerChoice === "paper"){
            result = "You lose! Paper beats rock.";
            computerScore++;
        } else if(getComputerChoice === "scissors"){
        result = "You win! Rock beats scissors.";
            humanScore++;    
        }
    } 
    /* paper logic */

    else if (getHumanChoice === "paper"){
        if(getComputerChoice === "rock"){
            result = "You win! Paper beats rock.";
            humanScore++;
        } else if(getComputerChoice === "scissors"){
            result = "You lose! Scissors beats paper.";
            computerScore++;
        }
    } /* scissor logic */
    
    else if (getHumanChoice === "scissors"){
        if(getComputerChoice === "rock"){
            result = "You lose! Rock beats scissors.";
            computerScore++;
        } else if(getComputerChoice === "paper"){
            result = "You win! Scissors beats paper.";
            humanScore++;
        }
    } else {
        result = "Invalid choice! Please choose rock, paper, or scissors.";
    }
    return result;
}



  // Main game loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        alert(roundResult);
    }

    // Determine final winner
    if (humanScore > computerScore) {
        determineWinner("Congratulations! You are the Champion!", humanScore, computerScore);
    } else if (computerScore > humanScore) {
        determineWinner("Sorry! The Computer wins the game.", humanScore, computerScore);
    } else {
        determineWinner("It's a tie overall!", humanScore, computerScore);
    }



}

// Start the game
playGame();