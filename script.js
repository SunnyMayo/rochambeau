let humanScore = 0
let compScore = 0

const human = document.querySelector("#humanScore");
const comp = document.querySelector("#compScore");

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

function playRound(humanChoice, compChoice) {
    if (humanChoice == "rock") {
        if (compChoice == "rock") {
            outcome.textContent = "It's a tie!";
        } 
        else if (compChoice == "paper") {
            outcome.textContent = "You lose! Paper beats rock!";
            compScore++;
        }
        else {
            outcome.textContent = "You win! Rock beats scissors!";
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (compChoice == "paper") {
            outcome.textContent = "It's a tie!";
        } 
        else if (compChoice == "scissors") {
            outcome.textContent = "You lose! Scissors beats paper!";
            compScore++;
        }
        else {
            outcome.textContent = "You win! Paper beats rock!";
            humanScore++;
        }
    }
    else {
        if (compChoice == "scissors") {
            outcome.textContent = "It's a tie!";
        } 
        else if (compChoice == "rock") {
            outcome.textContent = "You lose! Rock beats scissors!";
            compScore++;
        }
        else {
            outcome.textContent = "You win! Scissors beats paper!";
            humanScore++;
        }
    }
    return;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        let compChoice = getCompChoice();
        const outcome = document.querySelector("#outcome");
        playRound(humanChoice, compChoice);
        human.textContent = "Player score: " + humanScore;
        comp.textContent = "Computer score: " + compScore;
        if (humanScore == 5) {
            alert("Player wins!");
        }
        else if (compScore == 5) {
            alert("Computer wins!");
        };
    })
})

