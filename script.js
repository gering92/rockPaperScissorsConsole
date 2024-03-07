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

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome;
    
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

    console.log("Computer picked: " + computerSelection);
    return outcome;

}

function playGame() {
    let winCount = 0;
    for (let i = 1; i <= 5; i++) {
        let userSelection = prompt("Choose between \"rock\", \"paper\", or \"scissors\".").toLowerCase();
      
        if (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors") {
          console.log("Error, invalid input. Please try again.");
          i--; 
        } else {
            console.log("You have picked " + userSelection);
            let computerSelection = getComputerChoice();
            outcome = play(userSelection, computerSelection);
            console.log("Game Outcome: " + outcome);
            if (outcome === "You win!") {
                winCount++;
            }
        }
    }
    if (winCount >= 3) {
        console.log("Congratulations! You have won the game. You won " + winCount + " games!");
        console.log("Win percentage = " + (winCount / 5) * 100 + "%.");
    }
}