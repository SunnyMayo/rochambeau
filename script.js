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