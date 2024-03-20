document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorButton = document.querySelector(".scissor");

    const scoreBoard = document.createElement("score");
    const buttons = document.createElement("div");
    const container = document.createElement("div");
    const restart = document.createElement("button");

    const playerChoiceDisplay = document.createElement("div");
    const computerChoiceDisplay = document.createElement("div");
    const outcomeDisplay = document.createElement("div");
    const resultDisplay = document.createElement("div");

    const winner = document.createElement("div");
    winner.style.display = "flex";
    winner.style.justifyContent = "center";



    buttons.classList.add("buttons");
    buttons.style.padding = "10px";
    buttons.style.display = "flex";
    buttons.style.justifyContent = "center";
    buttons.style.alignItems = "center";
    buttons.style.gap = "10px";


    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorButton);

    document.body.appendChild(buttons);

    container.classList.add("container")
    container.style.flexDirection = "column";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    



    let playerWin = 0;
    let computerWin = 0;
    let outcome = "";

    rockButton.addEventListener("click", function() {
        playRound("rock");
    });
    paperButton.addEventListener("click", function() {
        playRound("paper");
    });
    scissorButton.addEventListener("click", function() {
        playRound("scissors");
    });

    restart.addEventListener("click", function() {
        restartGame();
    });

    scoreBoard.textContent = "Player Wins: " + playerWin + " Computer Wins: " + computerWin;
    /* scoreBoard CSS styling */
    scoreBoard.style.fontSize = "18px";
    scoreBoard.style.padding = "10px";
    scoreBoard.style.border = "5px solid red";
    scoreBoard.style.borderRadius = "10px;"

    restart.textContent = "Restart Game";
    restart.style.padding = "10px";
    restart.style.margin = "150px";


    resultDisplay.appendChild(playerChoiceDisplay);
    resultDisplay.appendChild(computerChoiceDisplay);
    resultDisplay.appendChild(outcomeDisplay);
    container.appendChild(resultDisplay);
    container.appendChild(scoreBoard);
    container.appendChild(restart)

    // Apply CSS styling to ensure each display element appears on a separate line
    playerChoiceDisplay.style.whiteSpace = "pre-line"; // Allow line breaks
    computerChoiceDisplay.style.whiteSpace = "pre-line"; // Allow line breaks
    outcomeDisplay.style.whiteSpace = "pre-line"; // Allow line breaks

    /* container CSS styling */
    resultDisplay.style.fontSize = "18px";
    resultDisplay.style.padding = "10px";
    resultDisplay.style.margin = "20px";


    document.body.appendChild(container);

    function restartGame() {
        playerWin = 0;
        computerWin = 0;
        outcome = "";

        // Update text content of elements
        playerChoiceDisplay.textContent = "";
        computerChoiceDisplay.textContent = "";
        outcomeDisplay.textContent = "";
        winner.textContent = "";
        scoreBoard.textContent = "Player Wins: " + playerWin + " Computer Wins: " + computerWin;
    }

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        
        if (randomNumber == 0) {
            return "rock";
        } else if (randomNumber == 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function playRound(playerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        
        if (playerSelection === computerSelection) {
            outcome = "Draw";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            outcome = "You win!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            outcome = "Sorry, you lost!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            outcome = "Sorry, you lost!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            outcome = "You win!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            outcome = "Sorry, you lost!";
        } else {
            outcome = "You win!";
        }

        if (outcome === "Sorry, you lost!") {
            computerWin++;
        } else if (outcome === "You win!") {
            playerWin++;
        }

        playerChoiceDisplay.textContent = "Player Choice: " + playerSelection;
        computerChoiceDisplay.textContent = "Computer Choice: " + computerSelection;
        outcomeDisplay.textContent = "Outcome: " + outcome;

        scoreBoard.textContent = "Player Wins: " + playerWin + " Computer Wins: " + computerWin;
        
        
        document.body.appendChild(winner);
        if (playerWin >= 5) {
            winner.textContent = "You Win!";
        } else if (computerWin >= 5) {
            winner.textContent = "Sorry, the computer won!";
        }
    }
});
