let humanScore = 0
let compScore = 0

function getCompChoice() {
    let choice = Math.random()
    if (choice <= 0.33) {
        return "rock";
    }
    else if (choice < 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Make a throw (rock, paper, or scissors): ").toLowerCase();
    return choice;
}

function playRound(humanChoice, compChoice) {
    if (humanChoice == "rock") {
        if (compChoice == "rock") {
            console.log("It's a tie!");
        } 
        else if (compChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            compScore++;
        }
        else {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (compChoice == "paper") {
            console.log("It's a tie!");
        } 
        else if (compChoice == "scissors") {
            console.log("You lose! Scissors beats paper!");
            compScore++;
        }
        else {
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
    }
    else {
        if (compChoice == "scissors") {
            console.log("It's a tie!");
        } 
        else if (compChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            compScore++;
        }
        else {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        }
    }
}