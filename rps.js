// Select DOM elements
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const finalWinnerDiv = document.getElementById("finalWinner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;

// Get computer's random choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Play a single round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  checkGameEnd();
}

// Check for game winner
function checkGameEnd() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      finalWinnerDiv.textContent = "🎉 You are the Champion!";
    } else {
      finalWinnerDiv.textContent = "💻 Computer wins the game!";
    }

    // Disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

// Attach event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
