
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

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "ROCK") {
            if (computerChoice === "ROCK") {
                console.log("Tie! Both are Rock");
            }
            else if (computerChoice === "PAPER") {
                computerScore += 1;
                console.log("You lose! Paper beats Rock");
            }
            else if (computerChoice === "SCISSORS") {
                humanScore += 1;
                console.log("You win! Rock beats Scissors");
            }
        }
    
        else if (humanChoice === "PAPER") {
            if (computerChoice === "ROCK") {
                humanScore += 1;
                console.log("You win! Paper beats Rock");
            }
            else if (computerChoice === "PAPER") {
                console.log("Tie! Both are Paper");
            }
            else if (computerChoice === "SCISSORS") {
                computerScore += 1;
                console.log("You lose! Scissors beats Paper");
            }
        }
    
        else if (humanChoice === "SCISSORS") {
            if (computerChoice === "ROCK") {
                computerScore += 1;
                console.log("You lose! Rock beats Scissors");
            }
            else if (computerChoice === "PAPER") {
                humanScore += 1;
                console.log("You win! Scissors beats Paper");
            }
            else if (computerChoice === "SCISSORS") {
                console.log("Tie! Both are Scissors");
            }
        }
    
        else {
            console.log("Game error");
        }
    
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Human wins!");
    }
    else if (humanScore < computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

}


playGame();

