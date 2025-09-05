
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 100) - 1;

    if (randomNumber >= 0 && randomNumber < 33) {
        return "ROCK";
    }

    else if (randomNumber >= 33 && randomNumber < 66) {
        return "PAPER";
    }

    else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanInput = prompt("Please enter a choice: Rock, Paper, or Scissors");

    if (humanInput != null) {
        return humanInput.toUpperCase();
    }
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    const results = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(results);

    const humanScoreDiv = document.createElement("div");
    const computerScoreDiv = document.createElement("div");
    body.appendChild(humanScoreDiv);
    body.appendChild(computerScoreDiv);

    const gameResult = document.createElement("div");
    body.appendChild(gameResult);

    rockButton.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice();
        playRound("ROCK", computerChoice);
    })

    paperButton.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice();
        playRound("PAPER", computerChoice);
    })

    scissorsButton.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice();
        playRound("SCISSORS", computerChoice);
    })

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "ROCK") {
            if (computerChoice === "ROCK") {
                results.textContent = "Tie! Both are Rock";
            }
            else if (computerChoice === "PAPER") {
                computerScore += 1;
                results.textContent = "You lose! Paper beats Rock";
            }
            else if (computerChoice === "SCISSORS") {
                humanScore += 1;
                results.textContent = "You win! Rock beats Scissors";
            }
        }
    
        else if (humanChoice === "PAPER") {
            if (computerChoice === "ROCK") {
                humanScore += 1;
                results.textContent = "You win! Paper beats Rock";
            }
            else if (computerChoice === "PAPER") {
                results.textContent = "Tie! Both are Paper";
            }
            else if (computerChoice === "SCISSORS") {
                computerScore += 1;
                results.textContent = "You lose! Scissors beats Paper";
            }
        }
    
        else if (humanChoice === "SCISSORS") {
            if (computerChoice === "ROCK") {
                computerScore += 1;
                results.textContent = "You lose! Rock beats Scissors";
            }
            else if (computerChoice === "PAPER") {
                humanScore += 1;
                results.textContent = "You win! Scissors beats Paper";
            }
            else if (computerChoice === "SCISSORS") {
                results.textContent = "Tie! Both are Scissors";
            }
        }
    
        else {
            results.textContent = "Game error";
        }

        humanScoreDiv.textContent = `Human Score: ${humanScore}`;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

            if (humanScore > computerScore) {
                gameResult.textContent = "Human wins!";
            }
            else if (humanScore < computerScore) {
                gameResult.textContent = "Computer wins!";
            }
            else {
                gameResult.textContent = "It's a tie!";
            }
        }
    }

    /*for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }*/

}

playGame();

