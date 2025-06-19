
// Computer Random Chioces
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomAnswer = Math.floor(Math.random() * choices.length);
    return choices[randomAnswer];
}

// Human Choice
function getHumanChoice(){
    return prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
}



// Displaying the result Determining the winner

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

    for(let i = 1; i<= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        alert("Round " + i + ": \nPlayer: " + humanChoice + "\nComputer: " + computerChoice + "\n" + result);
        determineWinner("Round" + i + ":\n", humanScore, computerScore);
    }

    let winnerMessage;

    if(humanScore > computerScore){
        winnerMessage = "Congratulations! You are the champion!";
    } else if(humanScore < computerScore){
        winnerMessage = "Sorry! The computer is the champion!";
    } else {
        winnerMessage = "It's a tie!";
    }

    determineWinner(winnerMessage, humanScore, computerScore);
}

playGame();